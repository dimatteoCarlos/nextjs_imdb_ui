export type AutoCompleteType = {
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

/*MoviesAutoCompleteInfoType.d.i.imageUrl
d.l, d.q, d.id, ...
*/
//data.movies.edges[]node.id, node.titleText.text || node.originalTitleText.text, node.releaseYear.year, node.titleType.text, node.primaryImage.url, node.principalCredits[].credits[].name.nameText.text, node.plot.plotText.plainText, node.titleGenres.genres[].genre.genreId.text, node.ratingsSummary.aggregateRating, node.certificate.ratingReason

export type PopularType = {
  data: {
    movies: {
      __typename: string;
      edges?:
        | {
            node: {
              __typename: string;
              id: string;
              titleText: {
                text: string;
                isOriginalTitle: boolean;
              };
              originalTitleText: {
                text: string;
                isOriginalTitle: boolean;
              };
              releaseYear: {
                __typename: string;
                year: number;
                endYear?: null;
              };
              releaseDate: ReleaseDate;
              titleType: TitleType;
              primaryImage: {
                __typename: string;
                id: string;
                url: string;
                height: number;
                width: number;
              };
              metacritic?: Metacritic | null;
              principalCredits?: PrincipalCreditsEntity[] | null;
              certificate?: Certificate | null;
              plot: Plot;
              titleGenres: TitleGenres;
              ratingsSummary: RatingsSummary;
              canRate: CanRate;
            };
          }[]
        | null;
      pageInfo: PageInfo;
    };
    tv: Tv;
  };
};
/******************* */
export type Data = {
  movies: {
    __typename: string;
    edges?:
      | {
          node: {
            __typename: string;
            id: string;
            titleText: {
              text: string;
              isOriginalTitle: boolean;
            };
            originalTitleText: {
              text: string;
              isOriginalTitle: boolean;
            };
            releaseYear: {
              __typename: string;
              year: number;
              endYear?: null;
            };
            releaseDate: ReleaseDate;
            titleType: TitleType;
            primaryImage: {
              __typename: string;
              id: string;
              url: string;
              height: number;
              width: number;
            };
            metacritic?: Metacritic | null;
            principalCredits?: PrincipalCreditsEntity[] | null;
            certificate?: Certificate | null;
            plot: Plot;
            titleGenres: TitleGenres;
            ratingsSummary: RatingsSummary;
            canRate: CanRate;
          };
        }[]
      | null;
    pageInfo: PageInfo;
  };
  tv: Tv;
};

export type TitleTextOrOriginalTitleText = {
  text: string;
  isOriginalTitle: boolean;
};
export type ReleaseYear = {
  __typename: string;
  year: number;
  endYear?: null;
};
export type ReleaseDate = {
  __typename: string;
  month: number;
  day: number;
  year: number;
  country: {
    id: string;
  };
  restriction?: null;
  attributes?: (RatingsBodyOrAttributesEntity | null)[] | null;
  displayableProperty: DisplayableProperty;
};

export type RatingsBodyOrAttributesEntity = {
  id: string;
  text: string;
};
export type DisplayableProperty = {
  qualifiersInMarkdownList?: null;
};
export type TitleType = {
  __typename: string;
  id: string;
  text: string;
  categories?: CategoriesEntity[] | null;
  canHaveEpisodes: boolean;
  isEpisode: boolean;
  isSeries: boolean;
  displayableProperty: DisplayableProperty1;
};
export type CategoriesEntity = {
  id: string;
  text: string;
  value: string;
};
export type DisplayableProperty1 = {
  value: ValueOrPlotText;
};
export type ValueOrPlotText = {
  plainText: string;
};
export type PrimaryImage = {
  __typename: string;
  id: string;
  url: string;
  height: number;
  width: number;
};
export type Metacritic = {
  metascore: Metascore;
};
export type Metascore = {
  score: number;
};
export type PrincipalCreditsEntity = {
  credits?: {
    name: {
      __typename: string;
      id: string;
      nameText: {
        text: string;
      };
      primaryImage?: PrimaryImage | null;
    };
  }[] | null;
};
export type CreditsEntity = {
  name: {
    __typename: string;
    id: string;
    nameText: NameText;
    primaryImage?: PrimaryImage | null;
  };
};
export type Name = {
  __typename: string;
  id: string;
  nameText: NameText;
  primaryImage?: PrimaryImage | null;
};
export type NameText = {
  text: string;
};
export type PrimaryImage1 = {
  __typename: string;
  id: string;
  url: string;
  height: number;
  width: number;
};
export type Certificate = {
  id: string;
  ratingsBody: RatingsBodyOrAttributesEntity1;
  ratingReason?: string | null;
  rating: string;
};
export type RatingsBodyOrAttributesEntity1 = {
  id: string;
  text: string;
};
export type Plot = {
  id: string;
  plotText: ValueOrPlotText;
};
export type TitleGenres = {
  __typename: string;
  genres?: GenresEntity[] | null;
};
export type GenresEntity = {
  genre: Genre;
};
export type Genre = {
  genreId: string;
  text: string;
};
export type RatingsSummary = {
  aggregateRating?: number | null;
};
export type CanRate = {
  isRatable: boolean;
};
export type PageInfo = {
  __typename: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};
export type Tv = {
  __typename: string;
  edges?: EdgesEntity1[] | null;
  pageInfo: PageInfo;
};
export type EdgesEntity1 = {
  node: Node1;
};
export type Node1 = {
  __typename: string;
  id: string;
  titleText: TitleTextOrOriginalTitleText;
  originalTitleText: TitleTextOrOriginalTitleText;
  releaseYear: ReleaseYear1;
  releaseDate: ReleaseDate;
  titleType: TitleType;
  primaryImage: PrimaryImage;
  metacritic?: null;
  principalCredits?: PrincipalCreditsEntity[] | null;
  certificate: Certificate1;
  plot: Plot;
  titleGenres: TitleGenres;
  ratingsSummary: RatingsSummary1;
  canRate: CanRate;
};
export type ReleaseYear1 = {
  __typename: string;
  year: number;
  endYear?: number | null;
};
export type Certificate1 = {
  id: string;
  ratingsBody?: null;
  ratingReason?: null;
  rating: string;
};
export type RatingsSummary1 = {
  aggregateRating: number;
};

//------------title overview plot

