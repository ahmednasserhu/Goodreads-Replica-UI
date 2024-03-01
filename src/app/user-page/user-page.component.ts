import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { AllTableComponent } from '../all-table/all-table.component';

import { Book } from '../interfaces/book';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserComponent, AllTableComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent {
  @Input() selecteBooks: Book[] = [];
  /*   sendToTable(booksBySelf: Book) {
    this.selecteBooks = booksBySelf;
  } */
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.selectedBooks$.subscribe((res) => {
      this.selecteBooks = res;
      console.log('shelf book are :' + this.selecteBooks);
    });
  }
}
