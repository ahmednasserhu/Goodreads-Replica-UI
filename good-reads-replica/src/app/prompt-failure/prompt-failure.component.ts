import { Component, ElementRef, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prompt-failure',
  standalone: true,
  imports: [],
  templateUrl: './prompt-failure.component.html',
  styleUrl: './prompt-failure.component.css'
})

export class PromptFailureComponent {
  @Input() showModal: boolean = false;

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    if (this.showModal) {
      // Use NgbModal to open the modal
      this.modalService.open(content);
    }
  }
}