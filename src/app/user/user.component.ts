import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllTableComponent } from "../all-table/all-table.component";
import { ReadTableComponent } from "../read-table/read-table.component";
import { CurrentlyReadingTableComponent } from "../currently-reading-table/currently-reading-table.component";
import { WantToReadTableComponent } from "../want-to-read-table/want-to-read-table.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CommonModule, RouterModule, AllTableComponent, ReadTableComponent, CurrentlyReadingTableComponent, WantToReadTableComponent]
})
export class UserComponent {
    selectedTab: string = 'all'; // Default tab
  
    switchTab(tabName: string) {
      this.selectedTab = tabName;
    }
  }