import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { BooksAdminComponent } from './books-admin/books-admin.component';
import { AuthorsAdminComponent } from './authors-admin/authors-admin.component';
import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { BooksComponent } from './books/books.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
  {
    path: 'admin/login',
    component: LoginComponent,
    title: 'login',
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    title: 'Admin Dashboard',
  },

  {
    path: 'admin/categories',
    component: CategoriesAdminComponent,
  },

  {
    path: 'admin/books',
    component: BooksAdminComponent,
    title: 'books',
  },

  {
    path: 'admin/authors',
    component: AuthorsAdminComponent,
    title: 'books',
  },

  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'user',
    component: UserPageComponent,
    children: [
      {
        path: 'read',
        component: UserPageComponent,
      },
      {
        path: 'all',
        component: UserPageComponent,
      },
      {
        path: 'wantread',
        component: UserPageComponent,
      },
      {
        path: 'currentread',
        component: UserPageComponent,
      },
    ],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories',
  },
  {
    path: 'categories/:categoryId',
    component: CategoryComponent,
  },
  {
    path: 'authors',
    component: AuthorsComponent,
    title: 'Authors',
  },
  {
    path: 'authors/:authorId',
    component: AuthorPageComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
    title: 'Books',
  },
  {
    path: 'books/:id',
    component: BookpageComponent,
    title: 'Book',
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found',
  },
];
