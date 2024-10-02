import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';
import { ResultMovieDataType } from '@/app/page';
import Image from 'next/image';

type CardPropsType = {
  result: ResultMovieDataType;
  route: 'movie' | 'news';
};

export default function Card({ result: detail, route }: CardPropsType) {
  const { id, imageUrl, title, paragraph, year, rankOrAuthor: rank } = detail;

  const detailRoute = `/${route}/${id}`;

  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 text-center sm:text-start'>
      <Link href={detailRoute}>
        {imageUrl && (
        <Image
            src={`${imageUrl}`}
            width={500}
            height={300}
            className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 inline-block'
            alt={title}
            priority
          />
        )}

        <div className='p-2'>
          <p className='line-clamp-2 text-[0.875rem]  text-center font-bold text-shadow-md '>
            {title.toString().toUpperCase()}
          </p>
          <h2 className='text-[0.75rem] font-regular '>{paragraph}</h2>

          <div className='flex justify-center py-[0.25rem] items-center gap-1  mt-2 border-t-amber-500 border-t border-solid text-[0.875rem] xl:text-[0.65rem]'>
            <span className='dark:text-amber-500 font-bold text-gray-800 '>
              Date:
            </span>
            <span className=''> {year.toString()}</span>
            <FiThumbsUp className='h-5 mr-0 ml-1' />
            <p className=' dark:text-amber-500 font-bold w-max overflow-auto '>
              {rank}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
