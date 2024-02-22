import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  addBookForm: FormGroup;
  selectedImage: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpServiceService,
    private cd: ChangeDetectorRef,
    private uploadService: UploadServiceService
  ) {
    this.addBookForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      image: [null] 
    });
  }

  onImagePicked(event: any) {
    const file: File = event.target.files[0];
    
    if (file) {
      this.selectedImage = file;
      console.log(file);
    }
  }

  onSubmit() {
    if (this.addBookForm.valid) {
      const formData = this.addBookForm.value;
      formData.image = this.selectedImage;
      this.uploadService.uploadBook(formData).subscribe(
        (res: any) => {
          console.log('Upload successful:', res);
        },
        (error: HttpErrorResponse) => {
          console.error('Upload failed:', error);
        }
      );
    }
  }
}