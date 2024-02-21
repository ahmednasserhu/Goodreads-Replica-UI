import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { ReadComponent } from './read/read.component';

export const routes: Routes = [
   
 
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
   {
  path: 'user',
  component: NavUserComponent,
  children: [
    { path: '', component: ReadComponent }
  ]
}


];