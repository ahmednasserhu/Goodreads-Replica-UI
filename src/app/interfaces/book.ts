import { Category } from './category';

export interface Book {
  id: String;
  name: String;
  imageUrl: String;
  rating: Number;
  avgRating:  {
    ratings: Number;
    rateValue: Number;
    sumRatings: Number;
  };
  author: {
    id: String;
    firstName: String;
    lastName: String;
    dateOfBirth: Date;
    imageUrl: String;
  };
  category: Category;
}
