import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
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
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorService } from '../services/author.service';
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
    NgbModule,
  ],
})
export class AuthorsAdminComponent {
  addAuthorForm: FormGroup;
  editAuthorForm: FormGroup;
  selectedImage: File | null = null;
  Authors: any = [];
  isEditDialogVisible: boolean = true;
  selectedAuthorId!: number;
  apiUrl: String = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadServiceService,
    private http: HttpServiceService,
    private modalService: NgbModal,
    private authorService: AuthorService
  ) {
    this.addAuthorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      image: [null],
    });

    this.editAuthorForm = this.fb.group({
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

  editAuthorSubmit() {
    if (this.editAuthorForm.valid) {
      const formData = this.editAuthorForm.value;
      formData.image = this.selectedImage;
      this.uploadService
        .updateData(formData, `authors/${this.selectedAuthorId}`)
        .subscribe(
          (res: any) => {
            console.log('Update successful:', res);
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

  editAuthor(content: TemplateRef<any>, authorId: number) {
    this.selectedAuthorId = authorId;
    console.log(this.selectedAuthorId);
    this.modalService.open(content, { centered: true });
    this.editAuthorForm.reset();
  }

  deleteAuthor(bookId: number) {
    this.authorService.deleteAuthor(bookId).subscribe(
      (res) => {
        this.getAuthors();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editIcon = faPencil;
  deleteIcon = faTrashCan;
  addAuthor = faUserPlus;
}
