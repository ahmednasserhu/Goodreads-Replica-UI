import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-read-table',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './read-table.component.html',
  styleUrl: './read-table.component.css'
})
export class ReadTableComponent {

}
