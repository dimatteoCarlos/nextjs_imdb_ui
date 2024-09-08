'use server';
import { NextPage } from 'next';
import { useDataFetch } from '../hook/useDataFetch.tsx';
import { AutoCompleteType, PopularType } from '../types1.ts';
import Results from '@/components/Results.tsx';

const API_KEY = process.env.API_KEY;
// console.log(API_KEY);

const autocompleteEndpoint = '/auto-complete/';
let autoCompleteParams = 'game-of-thr';

const popularEndpoint = '/title/v2/get-popular';
const test =
  'https://online-movie-database.p.rapidapi.com/title/v2/get-popular';
//https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr

const popularParams = {
  first: '20',
  country: 'US',
  language: 'en-US',
};

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
  },
};

export default async function Home({ searchParams }: any) {
  // const {data, isLoading, error, handleCancelRequest}= useDataFetch<AutoCompleteType>(autocompleteEndpoint, {autoCompleteParams});
  // const {data, isLoading, error, handleCancelRequest}= useDataFetch<PopularType>(popularEndpoint, popularParams);

  // const genre = searchParams.q || 'game%20of%20thr';
  let genre = 'game%20of%20thr';
  genre = 'adventure';
  const res = await fetch(
    `https://online-movie-database.p.rapidapi.com/auto-complete?q=${genre}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${API_KEY}`,
        'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
      },
      // next: { revalidate: 10000 },
    }
  );

  const data = await res.json();

  if (!res.ok || !data) {
    throw new Error('Failed to fetch data');
  }
  const results = data.d;

  console.log('results:', results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
