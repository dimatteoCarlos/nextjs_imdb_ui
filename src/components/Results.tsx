import { ResultMovieDataType } from '@/app/page';
import Card from './Card';

export default function Results({
  results,route
}: {
  results: ResultMovieDataType[];
  route:"movie" | "news";
}) {
  const filteredResults =
    results?.filter((result: any) => result?.imageUrl !== undefined) || [];

  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {!filteredResults || (filteredResults.length === 0 && 'No Data found')}
      {!!filteredResults &&
        filteredResults.length > 0 &&
        filteredResults?.map((result: ResultMovieDataType) => (
          <Card key={result.id} result={result} route={route}/>
        ))}
    </div>
  );
}


