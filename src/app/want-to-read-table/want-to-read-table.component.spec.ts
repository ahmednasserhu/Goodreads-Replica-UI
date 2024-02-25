import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToReadTableComponent } from './want-to-read-table.component';

describe('WantToReadTableComponent', () => {
  let component: WantToReadTableComponent;
  let fixture: ComponentFixture<WantToReadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WantToReadTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WantToReadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
