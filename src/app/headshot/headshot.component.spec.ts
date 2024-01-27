import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadshotComponent } from './headshot.component';

describe('HeadshotComponent', () => {
  let component: HeadshotComponent;
  let fixture: ComponentFixture<HeadshotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadshotComponent]
    });
    fixture = TestBed.createComponent(HeadshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
