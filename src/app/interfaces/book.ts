import { Author } from './author';
import { Category } from './category';

export interface Book {
  id: String;
  name: String;
  imageUrl: String;
  rating: Number;
  avgRating: Number;
  author: Author;
  category: Category;
}
