import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnComponent } from './bn.component';

describe('BnComponent', () => {
  let component: BnComponent;
  let fixture: ComponentFixture<BnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
