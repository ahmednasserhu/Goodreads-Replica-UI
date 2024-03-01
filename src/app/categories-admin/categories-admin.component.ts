import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFolderPlus,
  faPencil,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { AddCategoryModalComponent } from '../modals/add-category-modal/add-category-modal.component';
import { CategoryService } from '../services/category.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { catchError } from 'rxjs';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-categories-admin',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    AddCategoryModalComponent,
    NgbModule,
    ReactiveFormsModule,
  ],
  templateUrl: './categories-admin.component.html',
  styleUrl: './categories-admin.component.css',
})
export class CategoriesAdminComponent {
  categories: any = [];
  showAddCategoryModal!: boolean;
  content!: TemplateRef<any>;
  editCategoryForm!: FormGroup;
  selectedCategoryId!: number;

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.editCategoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  editCategory(content: TemplateRef<any>, categoryId: string) {
    this.selectedCategoryId = parseInt(categoryId);
    this.modalService.open(content, { centered: true });
    this.editCategoryForm.reset();
  }

  ngOnInit() {
    this.categoryService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  deleteCategory(categoryId: string) {
    this.categoryService
      .deleteCategory(parseInt(categoryId))
      .pipe(
        catchError((error) => {
          console.log('Error deleting category', error);
          return error;
        })
      )
      .subscribe((res) => {
        this.getCategories();
      });
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

  togglePopup() {
    this.showAddCategoryModal = !this.showAddCategoryModal;
    console.log(this.showAddCategoryModal);
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      const formData = this.editCategoryForm.value;
      this.categoryService
        .updataCategory(formData, this.selectedCategoryId)
        .pipe(
          catchError((error) => {
            console.log(error);
            return error;
          })
        )
        .subscribe();
    }
  }

  addCategory = faFolderPlus;
  editIcon = faPencil;
  deleteIcon = faTrashCan;
}
