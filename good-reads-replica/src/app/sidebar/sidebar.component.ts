import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBook, faBookOpen, faLayerGroup, faPen, faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { SidebarCommunicationService } from '../services/communication/sidebar-communication.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isNavigationActive = false;
  toggleNavigation() {
    this.isNavigationActive = !this.isNavigationActive;
  }

  constructor(private sidebarService: SidebarCommunicationService){
  }

  onButtonClicked(componentFlag: string){
    this.sidebarService.sendComponentFlag(componentFlag);
  }


  categoryIcon = faLayerGroup;
  booksIcon = faBook;
  websiteIcon = faBookOpen;
  authorIcon = faPen;
  toggleIcon = faBars;
  logoutIcon = faRightFromBracket
  addAdmin = faUserPlus
}
