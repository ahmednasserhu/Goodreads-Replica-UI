import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBook, faBookOpen, faLayerGroup, faPen, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  isNavigationActive = false;
  toggleNavigation() {
    this.isNavigationActive = !this.isNavigationActive;
  }


  categoryIcon = faLayerGroup;
  booksIcon = faBook;
  websiteIcon = faBookOpen;
  authorIcon = faPen;
  toggleIcon = faBars;
  logoutIcon = faRightFromBracket
}
