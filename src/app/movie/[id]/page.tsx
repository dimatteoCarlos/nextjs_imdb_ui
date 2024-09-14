//movie/[id]/page.tsx
import overview from '../../../_data/titleOverview.json';
const API_KEY = process.env.API_KEY;
const baseURL = 'https://online-movie-database.p.rapidapi.com';
const apiHost = 'online-movie-database.p.rapidapi.com';

export default async function MoviePage({ params }: { params: any }) {
  const movieId = params.id as string;

  if (!movieId) return;

  const endpoint = `/title/v2/get-overview?tconst=${movieId}&country=US&language=en-US`;

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
      overview;

  if (!res.ok && data) {
    console.log('Failed to fetch data so backup data is shown');
  }
  if (!res.ok && !data) {
    console.log('Failed to fetch data');
    throw new Error('Failed to fetch data');
  }

  const movieData = data.data;

  const movie = {
    id: movieData.title.id,
    imageUrl: movieData.title.primaryImage.url,
    title:
      movieData.title.titleText.text || movieData.title.originalTitleText.text,
    year: movieData.title.releaseYear?.year,
    rank: `${movieData.title.ratingsSummary?.aggregateRating}`,

    paragraph: `${
      movieData.title.plot?.plotText?.plainText ?? 'no title registered'
    }`,

    certificate: `${
      movieData.title.certificate?.ratingReason ?? 'unrated or unclassified'
    }`,
    voteCount: `${movieData.title.ratingsSummary.voteCount}`,
  };

  return (
    <div className='w-full'>
      <div className='p-4 flex flex-col md:pt-8  md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <img
          src={`${movie.imageUrl}`}
          width={500}
          height={300}
          className='rounded-lg'
          // style={{ maxWidth: '100%', height: '100%' }}
          alt={movie.title}
        ></img>

        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold dark:text-amber-500'>
            {movie.title}
          </h2>
          <p className='text-lg mb-3'>{movie.paragraph}</p>
          <p className='mb-3'>
            <span className='font-semibold dark:text-amber-500 mr-1'>
              Date Released:
            </span>
            {movie.year}
          </p>
          <p className='mb-3'>
            <span className='font-semibold dark:text-amber-500 mr-1'>
              Rating:
            </span>
            {movie.rank}
          </p>
          <p className='mb-3'>
            <span className='font-semibold dark:text-amber-500 mr-1'>
              Certificate:
            </span>
            {movie.certificate}
          </p>
        </div>
      </div>
    </div>
  );
}
