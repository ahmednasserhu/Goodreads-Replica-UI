import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  addBookForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpServiceService) {
    this.addBookForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  onImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.addBookForm.patchValue({ image:file });
      this.addBookForm.get('image')?.updateValueAndValidity();
    }
  }
  

  onSubmit() {
    // this.http.postBook(this.addBookForm.value).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error);
    //   }
    // );
    console.log(this.addBookForm.value);
  }
}
