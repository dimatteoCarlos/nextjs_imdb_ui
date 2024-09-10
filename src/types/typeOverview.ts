export interface plot {
  data:  {
    title: Title;
  }
}
export interface Data {
  title: Title;
}
export interface Title {
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
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  titleType: TitleType;
  primaryImage: PrimaryImage;
  meta: Meta;
  productionStatus: ProductionStatus;
  canRate: CanRate;
  ratingsSummary: RatingsSummary;
  interests: Interests;
  reviews: ReviewsOrExternalLinks;
  metacritic: Metacritic;
  externalLinks: ReviewsOrExternalLinks;
  series?: null;
  plot: Plot;
  certificate: Certificate;
  runtime: Runtime;
  episodes?: null;
  engagementStatistics: EngagementStatistics;
}
export interface TitleTextOrOriginalTitleText {
  text: string;
  isOriginalTitle: boolean;
}
export interface ReleaseYear {
  __typename: string;
  year: number;
  endYear?: null;
}
export interface ReleaseDate {
  __typename: string;
  month: number;
  day: number;
  year: number;
  country: Country;
  restriction?: null;
  attributes?: (null)[] | null;
  displayableProperty: DisplayableProperty;
}
export interface Country {
  id: string;
}
export interface DisplayableProperty {
  qualifiersInMarkdownList?: null;
}
export interface TitleType {
  __typename: string;
  id: string;
  text: string;
  categories?: (CategoriesEntity)[] | null;
  canHaveEpisodes: boolean;
  isEpisode: boolean;
  isSeries: boolean;
  displayableProperty: DisplayablePropertyOrDescription;
}
export interface CategoriesEntity {
  id: string;
  text: string;
  value: string;
}
export interface DisplayablePropertyOrDescription {
  value: ValueOrCaptionOrPlotText;
}
export interface ValueOrCaptionOrPlotText {
  plainText: string;
}
export interface PrimaryImage {
  __typename: string;
  id: string;
  url: string;
  height: number;
  width: number;
}
export interface Meta {
  id: string;
  restrictions?: null;
}
export interface ProductionStatus {
  __typename: string;
  announcements?: null;
  currentProductionStage: StatusOrCurrentProductionStageOrRatingsBody;
  productionStatusHistory?: (ProductionStatusHistoryEntity)[] | null;
}
export interface StatusOrCurrentProductionStageOrRatingsBody {
  id: string;
  text: string;
}
export interface ProductionStatusHistoryEntity {
  comment: CommentOrNodeOrNameTextOrDisplayableCount;
  date: string;
  status: StatusOrCurrentProductionStageOrRatingsBody;
}
export interface CommentOrNodeOrNameTextOrDisplayableCount {
  text: string;
}
export interface CanRate {
  isRatable: boolean;
}
export interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
}
export interface Interests {
  edges?: (EdgesEntity)[] | null;
}
export interface EdgesEntity {
  node: Node;
}
export interface Node {
  __typename: string;
  id: string;
  primaryImage: PrimaryImage1;
  description: DisplayablePropertyOrDescription;
  primaryText: PrimaryTextOrSecondaryText;
  secondaryText: PrimaryTextOrSecondaryText;
}
export interface PrimaryImage1 {
  __typename: string;
  id: string;
  url: string;
  height: number;
  width: number;
  type: string;
  caption: ValueOrCaptionOrPlotText;
  copyright?: string | null;
  createdBy?: string | null;
  source: Source;
  names?: (NamesEntity)[] | null;
  titles?: (TitlesEntity)[] | null;
  countries?: (null)[] | null;
  languages?: (null)[] | null;
}
export interface Source {
  text?: string | null;
  attributionUrl?: string | null;
  banner?: null;
}
export interface NamesEntity {
  __typename: string;
  id: string;
  nameText: CommentOrNodeOrNameTextOrDisplayableCount;
  primaryImage: PrimaryImage;
  akas: Akas;
}
export interface Akas {
  edges?: (EdgesEntity1 | null)[] | null;
}
export interface EdgesEntity1 {
  node: CommentOrNodeOrNameTextOrDisplayableCount;
}
export interface TitlesEntity {
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
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  titleType: TitleType;
  primaryImage: PrimaryImage;
}
export interface PrimaryTextOrSecondaryText {
  __typename: string;
  id: string;
  text: string;
}
export interface ReviewsOrExternalLinks {
  total: number;
}
export interface Metacritic {
  url: string;
  metascore: Metascore;
}
export interface Metascore {
  score: number;
  reviewCount: number;
}
export interface Plot {
  plotText: ValueOrCaptionOrPlotText;
}
export interface Certificate {
  __typename: string;
  id: string;
  rating: string;
  ratingsBody: StatusOrCurrentProductionStageOrRatingsBody;
  ratingReason: string;
  country: Country;
}
export interface Runtime {
  seconds: number;
}
export interface EngagementStatistics {
  watchlistStatistics: WatchlistStatistics;
}
export interface WatchlistStatistics {
  displayableCount: CommentOrNodeOrNameTextOrDisplayableCount;
}
