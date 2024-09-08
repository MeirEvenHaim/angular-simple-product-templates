import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloveListComponent } from '../../sloves.service';

describe('SloveListComponent', () => {
  let component: SloveListComponent;
  let fixture: ComponentFixture<SloveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SloveListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
