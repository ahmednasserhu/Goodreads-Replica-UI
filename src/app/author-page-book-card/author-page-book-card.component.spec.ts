import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPageBookCardComponent } from './author-page-book-card.component';

describe('AuthorPageBookCardComponent', () => {
  let component: AuthorPageBookCardComponent;
  let fixture: ComponentFixture<AuthorPageBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorPageBookCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorPageBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
