import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login Page',
  },

  // {
  //   path: 'admin',
  //   component: AdminDashboardComponent,
  //   children: [
  //     { path: '', redirectTo: 'categories', pathMatch: 'full' },
  //     { path: 'categories', component: CategoriesComponent, title: 'Categories' },
  //   ],
  //   title: 'Admin Dashboard'
  // },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    title: 'Admin Dashboard'
  },
  
  {
    path: 'admin/books',
    component: BooksComponent,
    title: 'books',
  },

  {
    path: 'admin/authors',
    component: AuthorsComponent,
    title: 'books',
  },

  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found',
  },
];
