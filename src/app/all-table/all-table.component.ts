import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-all-table',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './all-table.component.html',
  styleUrl: './all-table.component.css'
})
export class AllTableComponent {

}
