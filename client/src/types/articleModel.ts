export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  id?: string;
}

export interface ArticleCards extends Partial<Article> {
  widget?: boolean;
}

export interface ArticleResposne {
  article: Article;
  id?: string;
}