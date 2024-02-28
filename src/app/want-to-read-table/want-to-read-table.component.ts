import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-want-to-read-table',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './want-to-read-table.component.html',
  styleUrl: './want-to-read-table.component.css'
})
export class WantToReadTableComponent {

}
