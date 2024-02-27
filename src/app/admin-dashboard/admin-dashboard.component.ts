import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarCommunicationService } from '../services/communication/sidebar-communication.service';
import { Subscription } from 'rxjs';
import { BooksComponent } from '../books/books.component';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { AuthorsComponent } from '../authors/authors.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBook, faBookOpen, faLayerGroup, faPen, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AddAdminComponent } from '../add-admin/add-admin.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SidebarComponent,BooksComponent,CommonModule,CategoriesComponent,AuthorsComponent, FontAwesomeModule,AddAdminComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})

export class AdminDashboardComponent implements OnInit {
  componentFlag: string = 'addAdmin';

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;

  constructor(
    private sidebarService: SidebarCommunicationService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.sidebarService.componentFlag$.subscribe(flag => {
      this.componentFlag = flag;
      this.loadDynamicComponent();
    });
  }


  loadDynamicComponent() {
    this.dynamicComponentContainer.clear(); // Clear previous component (if any)

    if (this.componentFlag === 'books') {
      this.loadComponent(BooksComponent);
    } else if (this.componentFlag === 'categories') {
      this.loadComponent(CategoriesComponent);
    } else if (this.componentFlag === 'authors') {
      this.loadComponent(AuthorsComponent);
    } else if (this.componentFlag === 'addAdmin'){
      this.loadComponent(AddAdminComponent)
    }
    
  }

  private loadComponent(componentType: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
    // You can set inputs or perform any initialization here if needed
  }

  isNavigationActive = false;
  toggleNavigation() {
    this.isNavigationActive = !this.isNavigationActive;
  }

  toggleIcon = faBars;
}