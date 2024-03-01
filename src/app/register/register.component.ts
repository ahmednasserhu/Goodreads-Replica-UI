import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormErrorMsgComponent } from '../form-error-msg/form-error-msg.component';
import { passwordMatch } from '../valid/valid.component';
import { HeaderComponent } from '../header/header.component';
import { RegisterService } from '../services/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormErrorMsgComponent,
    HeaderComponent,
  ],
})
export class RegisterComponent {
  registerForm: FormGroup;
  selectedImage: File | null = null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private uploadService: UploadServiceService
  ) {
    this.registerForm = this.fb.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)],
        ],
        username: [
          '',
          [Validators.required, Validators.pattern(/^[a-z0-9_-]+$/)],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: passwordMatch,
      }
    );
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      formData.image = this.selectedImage;
      this.registerService
        .register(this.registerForm.value)
        .subscribe((res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registration Successful!',
            text: 'You can now log in with your credentials.',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigateByUrl('login');
        }),
        (error: HttpErrorResponse) => {
          console.error(error);
        };
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedImage = file;
    }
  }
}
