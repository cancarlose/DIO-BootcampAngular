import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedSampleComponent } from './checked-sample.component';

describe('CheckedSampleComponent', () => {
  let component: CheckedSampleComponent;
  let fixture: ComponentFixture<CheckedSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
