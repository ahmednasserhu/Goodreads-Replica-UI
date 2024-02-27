import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { CategoryService } from '../../services/category.service';
import { HttpServiceService } from '../../services/http-service.service';
import { CommonModule } from '@angular/common';
import { UploadServiceService } from '../../services/upload-service.service';

@Component({
  selector: 'app-add-book-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-book-modal.component.html',
  styleUrl: './add-book-modal.component.css',
})
export class AddBookModalComponent {
  @Input() showAddBookModal: boolean = false;
  addBookForm: FormGroup;
  selectedImage: File | null = null;
  books: any;
  categories: any = [];
  authors: any = [];

  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private categoryService: CategoryService,
    private authorService: HttpServiceService,
  ) {
    this.addBookForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', Validators.required],
      image: [null],
    });
  }

  ngOnInit(){
    this.getAuthors();
    this.getCategories();
    this.getBooks();
  }

  togglePopup() {
    this.showAddBookModal = !this.showAddBookModal;
    console.log(this.showAddBookModal);
    const popup = document.querySelector('.popup');
    popup!.classList.toggle('active');
    // Clear the form when the popup is closed
    if (!popup?.classList.contains('active')) {
      this.addBookForm.reset();
    }
  }

  onSubmit() {
    if (this.addBookForm.valid) {
      const formData = this.addBookForm.value;
      formData.image = this.selectedImage;
      this.bookService.uploadBookData(formData, 'books').subscribe(
        (res: any) => {
          console.log('Upload successful:', res);
          this.getBooks();
        },
        (error: HttpErrorResponse) => {
          console.error('Upload failed:', error);
        }
      );
    }
  }

  onImagePicked(event: any) {
    const file: File = event.target.files[0];
  
    if (file) {
      this.selectedImage = file;
      console.log(file);
    }
  }
  

  getBooks() {
    this.bookService.getBookData('categories').subscribe(
      (res: any) => {
        console.log('fetching data worked successfully');
        this.books = res;
      },
      (error: HttpErrorResponse) => {
        console.error('fetching data failed', error);
      }
    );
  }

  getCategories() {
    this.categoryService.getCategoryData('categories').subscribe(
      (res: any) => {
        console.log('Fetching categories worked successfully');
        this.categories = res;
      },
      (error: HttpErrorResponse) => {
        console.error('Fetching categories failed', error);
      }
    );
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
}
