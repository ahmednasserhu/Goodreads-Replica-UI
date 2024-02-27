import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators,} from '@angular/forms';
import { faEye,faEyeSlash,faLockOpen,faUser,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  onLogin() {
    this.http.postData(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        // Successful response
        if (res) {
          alert('Login success');
          localStorage.setItem('authorization', `${res.token}`);
          this.router.navigateByUrl('/admin');
        }
      },
      (error: HttpErrorResponse) => {
        // Error response
        if (error && error.error && error.error.status === 'fail') {
          console.log('Login failed');
          // this.showLoginErrorModal();
          alert(error.error.message || 'Wrong username or password');
        } else {
          console.error('Unexpected error:', error);
          // Handle other types of errors if needed
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