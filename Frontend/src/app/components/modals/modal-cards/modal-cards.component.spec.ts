import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardsComponent } from './modal-cards.component';

describe('ModalCardsComponent', () => {
  let component: ModalCardsComponent;
  let fixture: ComponentFixture<ModalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
