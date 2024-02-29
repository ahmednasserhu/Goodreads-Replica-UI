import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { BooksAdminComponent } from './books-admin/books-admin.component';
import { AuthorsAdminComponent } from './authors-admin/authors-admin.component';
import { UserComponent } from './user/user.component';
import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { BooksComponent } from './books/books.component';

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
    component: UserComponent,
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
    path: 'books',
    component: BooksComponent,
    title: 'books',
  },
  {
    path: 'books/:id',
    component: BookpageComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found',
  },
];
