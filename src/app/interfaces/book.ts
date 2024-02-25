export interface Book {
  name: string;
  id: number;
  imageUrl: string;
  authors: Array<string>;
  categories: Array<string>;
  rating: number;
  avgRate: number;
}
