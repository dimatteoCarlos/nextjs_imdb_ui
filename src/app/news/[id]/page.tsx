//news/[id]/page.tsx
import Image from 'next/image';
import newsArticle from './newsGetArticle.json';
// import newsArticle from './../../../_data/newsGetArticle.json';

import { GiJumpAcross } from 'react-icons/gi';

export type NewsArticle = {
  data: {
    newsArticle: {
      __typename: string;
      id: string;
      byline: string;
      date: string;
      externalUrl: string;
      articleTitle: {
        plainText: string;
      };
      image: {
        __typename: string;
        id: string;
        url: string;
        height: number;
        width: number;
      };
      text: {
        plainText: string;
      };
      source: {
        homepage: {
          url: string;
          label: string;
        };
        description?: null;
      };
    };
  };
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseURL = 'https://online-movie-database.p.rapidapi.com';
const apiHost = 'online-movie-database.p.rapidapi.com';

export default async function newsPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const newsId = params.id as string;
  if (!newsId) return;

  const endpoint = `/news/v2/get-article?niconst=${newsId}&country=US&language=en-US`;

  const res = await fetch(`${baseURL}${endpoint}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${API_KEY}`,
      'x-rapidapi-host': `${apiHost}`,
    },
    // next: { revalidate: 10000 }, //in seconds
  });

  const data = res.ok
    ? await res.json()
    : //backup data
      newsArticle;

  if (!res.ok && data) {
    console.log('Failed to fetch data so backup data is shown');
  }
  if (!res.ok && !data) {
    console.log('Failed to fetch data');
    throw new Error('Failed to fetch data');
  }

  const newsData = data.data;

  const news = {
    id: newsData.newsArticle?.id,
    imageUrl: newsData.newsArticle.image.url,
    title: newsData.newsArticle.articleTitle.plainText,

    paragraph: `${newsData.newsArticle.text.plainText}`,
    year: newsData.newsArticle.date,

    byline: `${newsData.newsArticle.byline ?? 'anonymous'}`,
    source: `${newsData.newsArticle.source.homepage.url}`,
    sourceLabel: `${newsData.newsArticle.source.homepage.label}`,

    externalUrl: `${newsData.newsArticle.externalUrl}`,
  };

  return (
    <div className='w-full'>
      <div className='p-4 flex flex-col md:pt-8  md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          src={`${news.imageUrl}`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
          alt={news.title}
        ></Image>

        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold dark:text-amber-500'>
            {news.title}
          </h2>
          <p className='text-lg mb-3'>{news.paragraph}</p>
          <p className='mb-3'>
            <span className='font-semibold dark:text-amber-500 mr-1'>
              {/* Date Released: */}
              Year:
            </span>
            {news.year.split('T')[0]}
          </p>

          <p className='mb-3'>
            <span className='font-semibold dark:text-amber-500 mr-1'>by:</span>
            {news.byline}
          </p>

          <p className='mb-3 flex gap-2 text-[0.875rem]'>
            <span className='font-semibold dark:text-amber-500 mr-1'>
              Source:
            </span>
            <span>{news.sourceLabel} on</span>
            <span>{news.source}</span>
          </p>

          <div className='flex justify-start items-center font-semibold '>
            <a
              href={news.externalUrl}
              target='_blank'
              rel='noreferrer'
              className='dark:text-amber-500
              mb-3 
              '
            >
              <span className='flex items-center '>
                Hop to article source
                <GiJumpAcross className='ml-2' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
