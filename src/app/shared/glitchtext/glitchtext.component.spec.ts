import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchtextComponent } from './glitchtext.component';

describe('GlitchtextComponent', () => {
  let component: GlitchtextComponent;
  let fixture: ComponentFixture<GlitchtextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlitchtextComponent]
    });
    fixture = TestBed.createComponent(GlitchtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
