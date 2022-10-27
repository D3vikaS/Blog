import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiCardComponent } from './indi-card.component';

describe('IndiCardComponent', () => {
  let component: IndiCardComponent;
  let fixture: ComponentFixture<IndiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
