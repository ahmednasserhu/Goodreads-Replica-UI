import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPencil,
  faTrashCan,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { AddBookModalComponent } from '../modals/add-book-modal/add-book-modal.component';
import { BooksService } from '../services/books.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpServiceService } from '../services/http-service.service';
import { CategoryService } from '../services/category.service';
import { catchError } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-books-admin',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AddBookModalComponent,
    NgbModule,
  ],
  templateUrl: './books-admin.component.html',
  styleUrl: './books-admin.component.css',
})
export class BooksAdminComponent {
  editBookForm: FormGroup;
  showAddBookModal!: boolean;
  selectedImage: File | null = null;
  selectedBookId!: number;
  Books: any = [];
  categories: any = [];
  authors: any = [];
  apiUrl: String = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private modalService: NgbModal,
    private authorService: HttpServiceService,
    private categoryService: CategoryService
  ) {
    this.editBookForm = this.fb.group({
      name: [''],
      category: [''],
      author: [''],
      image: [null],
    });
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBookData('books').subscribe(
      (res: any) => {
        console.log('fetching data worked successfully');
        this.Books = res;
        console.log(this.Books[3].id);
      },
      (error: HttpErrorResponse) => {
        console.error('fetching data failed', error);
      }
    );
  }

  togglePopup() {
    this.showAddBookModal = !this.showAddBookModal;
    console.log(this.showAddBookModal);
  }

  onSubmit() {
    if (this.editBookForm.valid) {
      const formData = this.editBookForm.value;
      formData.image = this.selectedImage;
      this.bookService
        .updateBookData(formData, `books/${this.selectedBookId}`)
        .subscribe(
          (res) => {
            this.getBooks();
          },
          (error: HttpErrorResponse) => {
            console.error(error);
          }
        );
    }
  }

  editBook(content: TemplateRef<any>, categoryId: number) {
    this.getCategories();
    this.getAuthors();
    this.selectedBookId = categoryId;
    this.modalService.open(content, { centered: true });
    this.editBookForm.reset();
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook('books', bookId).subscribe(
      (res) => {
        this.getBooks();
      },
      (error) => {
        console.error(error);
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

  getCategories() {
    this.categoryService
      .getCategories()
      .pipe(
        catchError((error) => {
          console.log('Retrieve categories failed : ', error);
          return error;
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  getAuthors() {
    this.authorService.getData('authors').subscribe(
      (res: any) => {
        console.log('Fetching categories worked successfully');
        this.authors = res;
      },
      (error: HttpErrorResponse) => {
        console.error('Fetching categories failed', error);
      }
    );
  }

  editIcon = faPencil;
  deleteIcon = faTrashCan;
  addAuthor = faUserPlus;
}
