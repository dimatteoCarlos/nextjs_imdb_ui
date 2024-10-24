'use server';
import getPopular from '../_data/getPopular.json';
import getNews from '../_data/newsGetByCategory.json';
import Results from '@/components/Results.tsx';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseURL = 'https://online-movie-database.p.rapidapi.com';
const apiHost = 'online-movie-database.p.rapidapi.com';

export type ResultMovieDataType = {
  id: string;
  imageUrl: string;
  title: string;
  paragraph: string;
  year: number | Date | string;
  rankOrAuthor: number | string | null;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  // console.log('searchParams:', searchParams);
  const genre = searchParams.genre;

  const endpoint =
    genre === 'fetchNews'
      ? '/news/v2/get-by-category?category=MOVIE&first=1000&country=US&language=en-US'
      : '/title/v2/get-popular?first=500&country=US&language=en-US';

  const res: Response = await fetch(`${baseURL}${endpoint}`, {
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
    genre === 'fetchNews'
    ? getNews
    : getPopular;

  if (!res.ok && data) {
    console.log('Failed to fetch data so backup data is shown');
  }
  if (!res.ok && !data) {
    console.log('Failed to fetch data');
    throw new Error('Failed to fetch data');
  }

  // fetched data structure depends on api response type data

  function popularMovies() {
    //build popularMovies data to be rendered as a results array with objects structured as required:
    //structure of popularMovies data:
    const popularMoviesData: {}[] = data.data.movies.edges;
    const popularMovies: ResultMovieDataType[] = Array.from(
      popularMoviesData,
      (datumObj: Record<string, any>) => {
        const obj = {
          id: datumObj.node.id,
          imageUrl: datumObj.node.primaryImage.url,
          title:
            datumObj.node.titleText.text ||
            datumObj.node.originalTitleText.text,

          year: datumObj.node.releaseYear.year,
          rankOrAuthor: Number(datumObj.node.ratingsSummary.aggregateRating),

          paragraph: datumObj.node.principalCredits[0].credits
            .map((credit: { [key: string]: any }) => credit.name.nameText.text)
            .join(', '),
        };

        return { ...obj };
      }
    ).sort((a, b) => b.rankOrAuthor - a.rankOrAuthor);
    return popularMovies;
  }

  function newsMovies() {
    //build newsMovies data to be rendered as a results array with objects structured as required:
    //structure of newsMovies data:
    const newsMoviesData: {}[] = data.data.news.edges;
    const newsMovies: ResultMovieDataType[] = Array.from(
      newsMoviesData,
      (datumObj: Record<string, any>) => {
        const obj = {
          id: datumObj.node.id,
          imageUrl: datumObj.node.image?.url,
          title: datumObj.node.articleTitle.plainText,
          year: datumObj.node.date.split('T')[0],
          rankOrAuthor: `by: ${datumObj.node.byline ?? 'anonymous'}  `,

          paragraph: `${
            datumObj.node.text.plainText
          } \n ${datumObj.node.source.homepage.url
            .split('/')
            .slice(0, 3)
            .join('/')}`,
        };

        return { ...obj };
      }
    );
    return newsMovies.sort(
      (a, b) => new Date(b.year).getTime() - new Date(a.year).getTime()
    );
  }

  const results = genre === 'fetchNews' ? newsMovies() : popularMovies();
  const categoryOfInfoDetail = genre === 'fetchNews' ? 'news' : 'movie';

  return (
    <div>
      <Results results={results} route={categoryOfInfoDetail} />
    </div>
  );
}
