import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptFailureComponent } from './prompt-failure.component';

describe('PromptFailureComponent', () => {
  let component: PromptFailureComponent;
  let fixture: ComponentFixture<PromptFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptFailureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromptFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
