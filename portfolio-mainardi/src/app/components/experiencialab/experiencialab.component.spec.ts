import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencialabComponent } from './experiencialab.component';

describe('ExperiencialabComponent', () => {
  let component: ExperiencialabComponent;
  let fixture: ComponentFixture<ExperiencialabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencialabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencialabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
