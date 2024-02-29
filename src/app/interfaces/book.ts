import { Author } from './author';
import { Category } from './category';

export interface Book {
  id: String;
  name: String;
  imageUrl: String;
  rating: Number;
  author: Author;
  avgRating:  {
    ratings: Number;
    rateValue: Number;
    sumRatings: Number;
  };
  category: Category;
}
