import { Component } from '@angular/core';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {
  selectedOption: string = 'All';

  selectOption(option: string) {
    this.selectedOption = option;
}
}
