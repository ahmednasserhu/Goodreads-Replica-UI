import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidComponent } from './valid.component';

describe('ValidComponent', () => {
  let component: ValidComponent;
  let fixture: ComponentFixture<ValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
