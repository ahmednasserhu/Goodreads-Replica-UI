import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroup, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
    });
  }
  firstName = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]);
  lastName = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]);
  confirmPassword = new FormControl('', [Validators.required]);
  
  getErrorMessage(control: FormControl, fieldName: string) {
    console.log('Control value:', control.value);
    console.log('Password value:', this.password.value);
  
    if (control.invalid && (control.dirty || control.touched)) {
      if (control.hasError('required')) {
        return `You must enter ${fieldName}`;
      }
  
      if (fieldName === 'email' && control.hasError('email')) {
        return 'Not a valid email';
      }
  
      if (fieldName === 'email' && control.value !== null) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(control.value)) {
          return 'Please enter a valid email address';
        }
      }
  
      if (fieldName === 'firstName' && control.hasError('pattern')) {
        return 'First name must contain only letters';
      }
  
      if (fieldName === 'lastName' && control.hasError('pattern')) {
        return 'Last name must contain only letters';
      }
  
      if (fieldName === 'password' && control.hasError('minlength')) {
        return 'Password must be at least 8 characters long';
      }
  
      if (fieldName === 'password' && control.hasError('pattern')) {
        return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
  
      if (fieldName === 'confirmPassword' && this.password.value !== control.value) {
        return 'Passwords do not match';
      }
    }
  
    return '';
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
     console.log('Form submitted successfully!');
   } else {
      console.error('Form has validation errors');
    }
  }
  
  
  
}
