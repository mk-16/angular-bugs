import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwoComponent } from './custom-two.component';

describe('CustomTwoComponent', () => {
  let component: CustomTwoComponent;
  let fixture: ComponentFixture<CustomTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
