import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioFabComponent } from './audio-fab.component';

describe('AudioFabComponent', () => {
  let component: AudioFabComponent;
  let fixture: ComponentFixture<AudioFabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioFabComponent]
    });
    fixture = TestBed.createComponent(AudioFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
