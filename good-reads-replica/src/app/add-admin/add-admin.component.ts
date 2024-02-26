import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddAdminService } from '../services/add-admin.service';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent {
  addAdminForm: FormGroup

  constructor(private fb:FormBuilder,private addAdminService:AddAdminService) {
    this.addAdminForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.required],
      password:['',Validators.required],
      isAdmin:[true],
    })
  }

  onSubmit() {
    if (this.addAdminForm.valid) {
      const formData = this.addAdminForm.value;
      this.addAdminService.addAdmin(formData, 'user').subscribe(
        (res: any) => {
          console.log(res)
        },
        (error: HttpErrorResponse) => {
          console.error('Upload failed:', error);
        }
      );
    }
  }
}
