import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  faEye,
  faEyeSlash,
  faLockOpen,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fieldTextType?: boolean = false;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpServiceService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.http.postData(this.loginForm.value).subscribe(
      (res: any) => {
        if (res) {
          localStorage.setItem('authorization', `${res.token}`);
          this.router.navigateByUrl('/admin');
        }
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid username or password. Please try again.',
        });

        if (error && error.error && error.error.status === 'fail') {
          console.error('Authentication failed:', error.error.message);
        } else {
          console.error('Unexpected error:', error);
        }
      }
    );
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  usernameIcon = faUser;
  passwordIcon = faLockOpen;
  eyeSlashIcon = faEyeSlash;
  eyeIcon = faEye;
}
