import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCreatorComponent } from './date-creator.component';

describe('DateCreatorComponent', () => {
  let component: DateCreatorComponent;
  let fixture: ComponentFixture<DateCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
