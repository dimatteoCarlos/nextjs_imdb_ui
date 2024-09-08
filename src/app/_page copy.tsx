import { NextPage } from 'next';
import { useDataFetch } from '../hook/useDataFetch.tsx';
import { AutoCompleteType, PopularType } from '../types1.ts';

type ApiRespAutoCompletType = {
  d?:
    | {
        i?: { height: number; imageUrl: string; width: number } | null;
        id: string;
        l: string;
        q: string;
        qid: string;
        rank: number;
        s: string;
        y?: number | null;
        yr?: string | null;
      }[]
    | null;
  q: string;
  v: number;
};

const autocompleteEndpoint = '/auto-complete/';
const autoCompleteParams = 'game-of-thr';

const popularEndpoint = '/title/v2/get-popular';
const test =
  'https://online-movie-database.p.rapidapi.com/title/v2/get-popular';
const popularParams = {
  first: '20',
  country: 'US',
  language: 'en-US',
};

async function Home() {
  // const {data, isLoading, error, handleCancelRequest}= useDataFetch<AutoCompleteType>(autocompleteEndpoint, {autoCompleteParams});
  const { data, isLoading, error, handleCancelRequest } =
    useDataFetch<PopularType>(popularEndpoint, popularParams);

  console.log(data);

  return <div>Home Page</div>;
}

export default Home;
