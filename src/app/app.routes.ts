import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllTableComponent } from './all-table/all-table.component';
import { ReadTableComponent } from './read-table/read-table.component';
import { CurrentlyReadingTableComponent } from './currently-reading-table/currently-reading-table.component';
import { WantToReadTableComponent } from './want-to-read-table/want-to-read-table.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { BooksAdminComponent } from './books-admin/books-admin.component';
import { AuthorsAdminComponent } from './authors-admin/authors-admin.component';
import { UserComponent } from './user/user.component';
import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';

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
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found',
  },
];
