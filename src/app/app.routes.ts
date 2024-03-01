import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
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
import { onlyAdminGuard } from './guards/only-admin.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'admin/login',
    component: LoginComponent,
    title: 'login',
    canActivate: [onlyAdminGuard],
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    title: 'Admin Dashboard',
    canActivate: [onlyAdminGuard],
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
    canActivate: [authGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories',
    canActivate: [authGuard],
  },
  {
    path: 'categories/:categoryId',
    component: CategoryComponent,
    canActivate: [authGuard],
  },
  {
    path: 'authors',
    component: AuthorsComponent,
    title: 'Authors',
    canActivate: [authGuard],
  },
  {
    path: 'authors/:authorId',
    component: AuthorPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'books',
    component: BooksComponent,
    title: 'Books',
    canActivate: [authGuard],
  },
  {
    path: 'books/:id',
    component: BookpageComponent,
    title: 'Book',
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found',
  },
];
