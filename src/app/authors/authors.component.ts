import { Component, OnInit } from '@angular/core';
import { Author } from '../interfaces/author';
import { UploadServiceService } from '../services/upload-service.service';
import { AuthorCardComponent } from '../author-card/author-card.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
  imports: [AuthorCardComponent],
})
export class AuthorsComponent implements OnInit {
  authors!: Author[];

  constructor(private authorService: UploadServiceService) {}

  ngOnInit(): void {
    this.authorService
      .getAuthors()
      .subscribe((authors) => (this.authors = authors));
  }
}
