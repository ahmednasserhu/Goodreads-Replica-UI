import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../interfaces/author';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.css',
})
export class AuthorCardComponent implements OnInit {
  @Input() author!: Author;
  apiUrl: String = environment.apiUrl;

  ngOnInit(): void {
    console.log(this.author.dateOfBirth);
  }
}
