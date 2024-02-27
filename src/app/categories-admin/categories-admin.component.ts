import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFolderPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AddCategoryModalComponent } from '../modals/add-category-modal/add-category-modal.component';
import { CategoryService } from '../services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories-admin',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, AddCategoryModalComponent,NgbModule,ReactiveFormsModule,],
  templateUrl: './categories-admin.component.html',
  styleUrl: './categories-admin.component.css',
})
export class CategoriesAdminComponent {
  Categories: any = [];
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

  editCategory(content: TemplateRef<any>, categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.modalService.open(content, { centered: true });
    this.editCategoryForm.reset();
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategoryData('categories').subscribe(
      (res: any) => {
        console.log('fetching data worked successfully');
        this.Categories = res;
      },
      (error: HttpErrorResponse) => {
        console.error('fetching data failed', error);
      }
    );
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory('categories', categoryId).subscribe(
      (res) => {
        this.getCategories();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  togglePopup() {
    this.showAddCategoryModal = !this.showAddCategoryModal;
    console.log(this.showAddCategoryModal);
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      const formData = this.editCategoryForm.value;
      this.categoryService
        .updataCategoryData(formData, `categories/${this.selectedCategoryId}`)
        .subscribe(
          (res) => {
            this.getCategories();
          },
          (error: HttpErrorResponse) => {
            console.error(error);
          }
        );
    }
  }

  addCategory = faFolderPlus;
  editIcon = faPencil;
  deleteIcon = faTrashCan;
}
