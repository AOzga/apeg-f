import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectbuttonComponent } from './rectbutton.component';

describe('RectbuttonComponent', () => {
  let component: RectbuttonComponent;
  let fixture: ComponentFixture<RectbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectbuttonComponent]
    });
    fixture = TestBed.createComponent(RectbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
