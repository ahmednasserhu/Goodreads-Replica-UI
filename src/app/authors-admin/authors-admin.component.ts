import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPencil,
  faTrashCan,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { UploadServiceService } from '../services/upload-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpServiceService } from '../services/http-service.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-authors-admin',
  standalone: true,
  templateUrl: './authors-admin.component.html',
  styleUrl: './authors-admin.component.css',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    EditDialogComponent,
  ],
})
export class AuthorsAdminComponent {
  addAuthorForm: FormGroup;
  selectedImage: File | null = null;
  Authors: any = [];
  isEditDialogVisible: boolean = true;
  apiUrl: String = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadServiceService,
    private http: HttpServiceService
  ) {
    this.addAuthorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      image: [null],
    });
  }

  ngOnInit() {
    this.getAuthors();
  }

  togglePopup() {
    const popup = document.querySelector('.popup');
    popup!.classList.toggle('active');
    // Clear the form when the popup is closed
    if (!popup?.classList.contains('active')) {
      this.addAuthorForm.reset();
    }
  }

  onSubmit() {
    if (this.addAuthorForm.valid) {
      const formData = this.addAuthorForm.value;
      formData.image = this.selectedImage;
      this.uploadService.uploadData(formData, 'authors').subscribe(
        (res: any) => {
          console.log('Upload successful:', res);
          this.getAuthors();
        },
        (error: HttpErrorResponse) => {
          console.error('Upload failed:', error);
        }
      );
    }
  }

  getAuthors() {
    this.http.getData('authors').subscribe(
      (res: any) => {
        console.log('fetching data worked successfully');
        this.Authors = res;
        console.log(
          'this is the authors returned from the server',
          this.Authors
        );
      },
      (error: HttpErrorResponse) => {
        console.error('fetching data failed', error);
      }
    );
  }

  onImagePicked(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedImage = file;
      console.log(file);
    }
  }
  editAuthor(author: any) {
    this.isEditDialogVisible = true;
    console.log(this.isEditDialogVisible);
  }

  deleteAuthor(authorId: number) {
    // Implement your delete functionality here
    console.log('Delete author with ID:', authorId);
  }

  editIcon = faPencil;
  deleteIcon = faTrashCan;
  addAuthor = faUserPlus;
}
