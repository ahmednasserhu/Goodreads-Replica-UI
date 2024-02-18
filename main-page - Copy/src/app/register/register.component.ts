import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormErrorMsgComponent } from '../form-error-msg/form-error-msg.component';
import { passwordMatch } from '../valid/valid.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormErrorMsgComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  selectedFile: File | undefined;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$")]],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validators: passwordMatch
      }
    )
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.router.navigate(["/login"]);
      window.alert(`User [${this.registerForm.controls['username'].value}] Successfully Registered`);
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}