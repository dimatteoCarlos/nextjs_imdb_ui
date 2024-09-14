import Link from 'next/link';
import getSearch from '../../../_data/autoCompleteResults.json';
import { FiThumbsUp } from 'react-icons/fi';
import Image from 'next/image'; // Importa el componente Image

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

  try {
    const res = await fetch(`${baseURL}${endpoint}`, options);

    // Verificar si la respuesta es ok y luego parsear el JSON
    if (!res.ok) {
      console.log('Failed to fetch data');
      throw new Error('Failed to fetch data');
    }

    const text = await res.text(); // Obtener la respuesta como texto
    let data;
    try {
      data = text ? JSON.parse(text) : getSearch; // Intentar parsear el texto a JSON
    } catch (error) {
      console.error('Error parsing JSON:', error);
      data = getSearch; // Usar los datos de respaldo en caso de error
    }

    if (!data || typeof data !== 'object') {
      console.log('Invalid data format');
      throw new Error('Invalid data format');
    }

    const searchResultsData = (data.d || []) as SearchResultDataType[];

    const searchInfo = searchResultsData.filter(
      (item: SearchResultDataType) => item.i?.imageUrl !== undefined
    );

    return (
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
        {searchInfo.length === 0 && 'No data was found'}

        {searchInfo.length > 0 &&
          searchInfo
            .sort((a, b) => b.y ?? 0 - (a.y ?? 0))
            .map((searchItem: SearchResultDataType) => {
              const {
                id,
                l: title,
                rank,
                y: year,
                yr: yearPeriod,
                i,
                s: characters,
              } = searchItem;
              const imageUrl = i?.imageUrl || '/default-image.jpg';

              return (
                <div
                  className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 text-center sm:text-start'
                  key={id}
                >
                  <Link href={`/movie/${id}`}>
                    <div>
                      <Image
                        src={imageUrl}
                        width={500}
                        height={300}
                        className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 inline-block'
                        alt={title}
                      />

                      <div className='p-2'>
                        <p className='line-clamp text-[0.875rem] text-center font-bold text-shadow-md'>
                          {title.toUpperCase()}
                        </p>
                        <p className='text-[0.875rem] text-center'>{characters}</p>

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
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
    );
  } catch (error) {
    console.error('Error in searchPage:', error);
    return <div>Error fetching data</div>; // Mostrar un mensaje de error amigable al usuario
  }
}
