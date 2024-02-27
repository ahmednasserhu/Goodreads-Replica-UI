import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalCommunicationService {
  private editCategoryModalSubject = new Subject<void>();
  constructor() { }

  openEditCategoryModal() {
    this.editCategoryModalSubject.next();
  }

  getEditCategoryModalObservable() {
    return this.editCategoryModalSubject.asObservable();
  }
}
