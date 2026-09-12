export interface Article {
  slug: string;
  category: string;
  title: string;
  date: string;
  image: string;
  updatedDate: string;
  summary: string;
  author: string;
  sourceAuthority?: string;
  kind: "insight" | "news";
  city?: string;
  body: string[];
}
