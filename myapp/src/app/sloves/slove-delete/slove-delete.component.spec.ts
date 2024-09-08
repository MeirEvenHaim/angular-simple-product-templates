import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloveDeleteComponent } from '../../sloves.service.spec';

describe('SloveDeleteComponent', () => {
  let component: SloveDeleteComponent;
  let fixture: ComponentFixture<SloveDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SloveDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloveDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
