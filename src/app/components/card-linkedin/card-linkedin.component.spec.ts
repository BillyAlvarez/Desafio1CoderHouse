import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLinkedinComponent } from './card-linkedin.component';

describe('CardLinkedinComponent', () => {
  let component: CardLinkedinComponent;
  let fixture: ComponentFixture<CardLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLinkedinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
