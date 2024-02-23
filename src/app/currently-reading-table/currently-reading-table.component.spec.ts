import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyReadingTableComponent } from './currently-reading-table.component';

describe('CurrentlyReadingTableComponent', () => {
  let component: CurrentlyReadingTableComponent;
  let fixture: ComponentFixture<CurrentlyReadingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentlyReadingTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentlyReadingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
