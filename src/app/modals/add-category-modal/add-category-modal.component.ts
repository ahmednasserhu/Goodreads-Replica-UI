import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-category-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-category-modal.component.html',
  styleUrl: './add-category-modal.component.css',
})
export class AddCategoryModalComponent {
  @Input() showAddCategoryModal: boolean = false;
  categories: any = [];
  addCategoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.addCategoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addCategoryForm.valid) {
      const formData = this.addCategoryForm.value;
      this.categoryService
        .createCategory(formData)
        .pipe(
          catchError((error) => {
            console.log('Create category failed : ', error);
            return error;
          })
        )
        .subscribe((res) => {
          this.getCategories();
        });
    }
  }

  togglePopup() {
    this.showAddCategoryModal = !this.showAddCategoryModal;
    console.log(this.showAddCategoryModal);
    const popup = document.querySelector('.popup');
    popup!.classList.toggle('active');
    // Clear the form when the popup is closed
    if (!popup?.classList.contains('active')) {
      this.addCategoryForm.reset();
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
}
