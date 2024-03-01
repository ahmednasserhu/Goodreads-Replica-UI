import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllTableComponent } from '../all-table/all-table.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBook,
  faBookOpen,
  faLayerGroup,
  faPen,
  faRightFromBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { SidebarCommunicationService } from '../services/communication/sidebar-communication.service';
import { Book } from '../interfaces/book';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CommonModule, RouterModule, AllTableComponent, FontAwesomeModule],
})
export class UserComponent {
  isNavigationActive = false;
  toggleNavigation() {
    this.isNavigationActive = !this.isNavigationActive;
  }
  @Output() Sendbooks = new EventEmitter<Book[]>();
  books!: Array<Book>;
  constructor(
    private sidebarService: SidebarCommunicationService,
    private userService: UserService
  ) {}

  onButtonClicked(componentFlag: string) {
    this.sidebarService.sendComponentFlag(componentFlag);
    this.userService.getBooksFromShelf(componentFlag).subscribe((res) => {
      this.books = res;
      this.userService.sendSelectedBooks(this.books);
    });
  }

  categoryIcon = faLayerGroup;
  booksIcon = faBook;
  websiteIcon = faBookOpen;
  authorIcon = faPen;
  toggleIcon = faBars;
  logoutIcon = faRightFromBracket;
  addAdmin = faUserPlus;
}
