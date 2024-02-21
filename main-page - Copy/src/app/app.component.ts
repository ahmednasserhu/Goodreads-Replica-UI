import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { FormErrorMsgComponent } from './form-error-msg/form-error-msg.component';
import { NavUserComponent } from './nav-user/nav-user.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule,RegisterComponent, LoginComponent,FormErrorMsgComponent, NavUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'main-page';
  isUserRoute: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isUserRoute = event.url.includes('/user');
      }
    });
  }
}
