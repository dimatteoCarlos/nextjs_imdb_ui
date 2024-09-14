import Link from 'next/link';
import getSearch from '../../../_data/autoCompleteResults.json';
import { FiThumbsUp } from 'react-icons/fi';

export type SearchResultDataType = {
  i?: {
    height: number;
    imageUrl: string;
    width: number;
  } | null;
  id: string;
  l: string;
  q: string;
  qid: string;
  rank: number;
  s: string;
  y?: number | null;
  yr?: string | null;
};

const API_KEY = process.env.API_KEY;
const baseURL = 'https://online-movie-database.p.rapidapi.com';
const apiHost = 'online-movie-database.p.rapidapi.com';

if (!API_KEY) {
  throw new Error('API_KEY is not defined in the environment');
}

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': apiHost,
  },
};

export default async function searchPage({
  params,
}: {
  params: {
    searchTerm: string;
  };
}) {
  const { searchTerm } = params;

  if (!searchTerm) return null;

  const endpoint = `/auto-complete?q=${searchTerm}`;

  const res = await fetch(`${baseURL}${endpoint}`, options);

  const data = res.ok ? await res.json() : getSearch;

  if (!res.ok && !data) {
    console.log('Failed to fetch data');
    throw new Error('Failed to fetch data');
  }

  const searchResultsData = (data.d || []) as SearchResultDataType[];

  const searchInfo = searchResultsData
    .filter((item: SearchResultDataType) => item.i?.imageUrl !== undefined)
    .sort((a, b) => b.y ?? 0 - (a.y ?? 0));

  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {searchInfo.length === 0 && 'No data was found'}

      {searchInfo.length > 0 &&
        searchInfo.map((searchItem: SearchResultDataType) => {
          const { id, l: title, rank, y: year, yr: yearPeriod, i } = searchItem;
          const imageUrl = i?.imageUrl || '/default-image.jpg';

          return (
            <div
              className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 text-center sm:text-start'
              key={id}
            >
              <Link href={`/movie/${id}`}>
                <img
                  src={imageUrl}
                  width={500}
                  height={300}
                  className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 inline-block'
                  alt={title}
                />

                <div className='p-2'>
                  <p className='line-clamp- text-[0.875rem] text-center font-bold text-shadow-md'>
                    {title.toUpperCase()}
                  </p>

                  <div className='flex justify-center py2 items-center gap-1 mt-2 xl:text-[0.65rem] text-[0.875rem]'>
                    <span className='dark:text-amber-500 font-bold text-gray-800'>
                      Year:
                    </span>
                    <span>{year}</span>

                    {!!yearPeriod && (
                      <>
                        <span className='dark:text-amber-500 font-bold text-gray-800 ml-1'>
                          Period:
                        </span>
                        <span className='block'>{yearPeriod}</span>
                      </>
                    )}
                    <FiThumbsUp className='h-5 mr-0 ml-1' />
                    <p className='dark:text-amber-500 font-bold w-max overflow-auto'>
                      {rank}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
