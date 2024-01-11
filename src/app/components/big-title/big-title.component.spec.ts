import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTitleComponent } from './big-title.component';

describe('BigTitleComponent', () => {
  let component: BigTitleComponent;
  let fixture: ComponentFixture<BigTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigTitleComponent]
    });
    fixture = TestBed.createComponent(BigTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
