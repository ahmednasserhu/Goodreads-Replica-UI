import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTableComponent } from './all-table.component';

describe('AllTableComponent', () => {
  let component: AllTableComponent;
  let fixture: ComponentFixture<AllTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
