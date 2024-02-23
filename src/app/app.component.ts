import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormErrorMsgComponent } from './form-error-msg/form-error-msg.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { AllTableComponent } from './all-table/all-table.component';
import { ReadTableComponent } from './read-table/read-table.component';
import { CurrentlyReadingTableComponent } from './currently-reading-table/currently-reading-table.component';
import { WantToReadTableComponent } from './want-to-read-table/want-to-read-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AllTableComponent,
    ReadTableComponent,
    CurrentlyReadingTableComponent,
    WantToReadTableComponent,
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    RegisterComponent,
    LoginComponent,
    FormErrorMsgComponent,
    NavUserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'main-page';
  isLogged: Boolean = true;
}
