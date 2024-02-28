import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UploadServiceService } from '../services/upload-service.service';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css',
})
export class EditDialogComponent {
  editAuthorForm: FormGroup;
  selectedImage: File | null = null;
  Authors:any = [];

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadServiceService,
    private http: HttpServiceService,
  ) {
    this.editAuthorForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      imgae: [null],
    });
  }

  getAuthors() {
    this.http.getData('authors').subscribe((res: any) => {
      console.log('fetching data worked successfully');
      this.Authors = res;
      console.log('this is the authors returned from the server',this.Authors);
    },
    (error: HttpErrorResponse) => {
      console.error('fetching data failed', error);
    }
    );
  }

  

  onSubmit() {
    if (this.editAuthorForm.valid) {
      const formData = this.editAuthorForm.value;
      formData.image = this.selectedImage;
      this.uploadService.updateData(formData, 'authors').subscribe(
        (res: any) => {
          console.log('Upload successful:', res);
        },
        (error: HttpErrorResponse) => {
          console.error('Upload failed:', error);
        }
      );
    }
  }

  togglePopup() {
    const popup = document.querySelector('.popup');
    popup!.classList.toggle('active');
    // Clear the form when the popup is closed
    if (!popup?.classList.contains('active')) {
      this.editAuthorForm.reset();
    }
  }

  onImagePicked(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedImage = file;
      console.log(file);
    }
  }
}
