import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloveCreateComponent } from './slove-create.component';

describe('SloveCreateComponent', () => {
  let component: SloveCreateComponent;
  let fixture: ComponentFixture<SloveCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SloveCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloveCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
