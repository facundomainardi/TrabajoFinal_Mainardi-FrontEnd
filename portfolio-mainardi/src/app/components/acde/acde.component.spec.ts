import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcdeComponent } from './acde.component';

describe('AcdeComponent', () => {
  let component: AcdeComponent;
  let fixture: ComponentFixture<AcdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
