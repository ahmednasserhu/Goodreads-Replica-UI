export interface User {
  _id: String;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  isAdmin: Boolean;
  books: {
    book: String;
    shelf: String;
    rating: Number;
  };
}
