
'use client'
import { useEffect, useState } from 'react';
import axiosInstance from '../lib/axiosInstance.ts';
import axios, { AxiosError } from 'axios';

type UseDataFetchRespType<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  handleCancelRequest: () => void;
};

type ErrorResponse = {
  message?: string;
};

export function useDataFetch<T>(
  endpoint: string,
  params: Record<string, any>,
): UseDataFetchRespType<T> {
  //---------states----------
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  useEffect(() => {
    //Create a new AbortController for the request
    const controller = new AbortController();
    setAbortController(controller);

    //---define async fn to handle request
    const dataFetch = async () => {
      setIsLoading(true);
      setError(null);
      try {
        //const searchParam = 'game of thr';
        // const response = await axiosInstance.get<T>(
        //   `${endpoint}?q=${searchParam}`,
        //   {
        //     signal: controller.signal,
        //   }
        // );

        const response = await axiosInstance.get<T>(endpoint, {
          params,
          signal: controller.signal,
        });
        //params: { q: 'game of thr' }

        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
        if (axios.isCancel(error)) {
          console.log('Request cancelled by user');
          // if (error.name === 'AbortError') {
          //   console.log('Request cancelled by user');
        } else {
          const axiosError = error as AxiosError<ErrorResponse>;
          setError(axiosError?.response?.data?.message || 'An error occurred');
        }
      } finally {
        setIsLoading(false);
        setError(null);
      }
    };

    dataFetch();

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [endpoint, params]);

  //fn to manually cancel the request

  const handleCancelRequest = () => {
    if (abortController) {
      //cancel request
      abortController.abort();
      setError('Request cancelled');
    }
  };

  return { data, isLoading, error, handleCancelRequest };
}

// export default useDataFetch;
