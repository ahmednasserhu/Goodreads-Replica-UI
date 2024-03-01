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
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserService } from './services/user.service';

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
    AdminDashboardComponent,
    NotfoundComponent,
    NgbModule,
    SweetAlert2Module,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLogged: Boolean = false;
  isAdmin: Boolean = false;

  title = 'good-reads-replica';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user) => {
        this.isLogged = true;
        this.isAdmin = user.isAdmin;
      },
      (error) => {
        this.isLogged = false;
        this.isAdmin = false;
      }
    );
  }
}
