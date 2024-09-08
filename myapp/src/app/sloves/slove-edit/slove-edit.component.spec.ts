import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloveEditComponent } from './slove-edit.component';

describe('SloveEditComponent', () => {
  let component: SloveEditComponent;
  let fixture: ComponentFixture<SloveEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SloveEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
