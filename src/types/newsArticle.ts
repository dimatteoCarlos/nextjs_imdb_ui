
export type NewsArticleType= {
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
}

export interface Data {
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
}

export interface NewsArticle {
  __typename: string;
  id: string;
  byline: string;
  date: string;
  externalUrl: string;
  articleTitle: ArticleTitleOrText;
  image: Image;
  text: ArticleTitleOrText;
  source: Source;
}
export interface ArticleTitleOrText {
  plainText: string;
}
export interface Image {
  __typename: string;
  id: string;
  url: string;
  height: number;
  width: number;
}
export interface Source {
  homepage: Homepage;
  description?: null;
}
export interface Homepage {
  url: string;
  label: string;
}
