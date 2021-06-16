import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookoperationComponent } from './bookoperation.component';

describe('BookoperationComponent', () => {
  let component: BookoperationComponent;
  let fixture: ComponentFixture<BookoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
