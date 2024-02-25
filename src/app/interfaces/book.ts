export interface Book {
  id: String;
  name: String;
  imageUrl: String;
  rating: Number;
  avgRating: Number;
  authorId: {
    id: String;
    firstName: String;
    lastName: String;
    dateOfBirth: Date;
    imageUrl: String;
  };
  categoryId: {
    id: String;
    name: String;
  };
}
