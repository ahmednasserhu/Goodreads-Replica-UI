import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-currently-reading-table',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './currently-reading-table.component.html',
  styleUrl: './currently-reading-table.component.css'
})
export class CurrentlyReadingTableComponent {

}
