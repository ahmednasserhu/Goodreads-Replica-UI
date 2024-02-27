import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UploadServiceService } from '../../services/upload-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-category-modal.component.html',
  styleUrl: './add-category-modal.component.css'
})
export class AddCategoryModalComponent {
  @Input() showAddCategoryModal: boolean = false;
  addCategoryForm: FormGroup
  constructor(private fb:FormBuilder,private categoryService:CategoryService) {
    this.addCategoryForm = this.fb.group({
      name:['',Validators.required],
    })
  }

  onSubmit() {
    if (this.addCategoryForm.valid) {
      const formData = this.addCategoryForm.value;
      this.categoryService.uploadCategoryData(formData, 'categories').subscribe(
        (res: any) => {
          console.log('Upload successful:', res);
          // this.getAuthors();
        },
        (error: HttpErrorResponse) => {
          console.error('Upload failed:', error);
        }
      );
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
}
