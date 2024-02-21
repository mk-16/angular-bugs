import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOneComponent } from './custom-one.component';

describe('CustomOneComponent', () => {
  let component: CustomOneComponent;
  let fixture: ComponentFixture<CustomOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
