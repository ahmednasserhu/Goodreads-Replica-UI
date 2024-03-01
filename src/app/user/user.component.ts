import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllTableComponent } from "../all-table/all-table.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CommonModule, RouterModule, AllTableComponent]
})
export class UserComponent {
    selectedTab: string = 'all'; // Default tab

    switchTab(tabName: string) {
      this.selectedTab = tabName;
    }
  }
