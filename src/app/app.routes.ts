import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { AllTableComponent } from './all-table/all-table.component';
import { ReadTableComponent } from './read-table/read-table.component';
import { CurrentlyReadingTableComponent } from './currently-reading-table/currently-reading-table.component';
import { WantToReadTableComponent } from './want-to-read-table/want-to-read-table.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { UserComponent } from './user/user.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { CategoryComponent } from './category/category.component';
export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllTableComponent },
      { path: 'read', component: ReadTableComponent },
      { path: 'currently-read', component: CurrentlyReadingTableComponent },
      { path: 'want-to-read', component: WantToReadTableComponent },
    ],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:categoryId',
    component: CategoryComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'authors',
    component: AuthorsComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
    title:'books'
  },
  {
    path: 'books/:id',
    component:BookpageComponent
  }
];
