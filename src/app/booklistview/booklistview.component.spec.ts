import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistviewComponent } from './booklistview.component';

describe('BooklistviewComponent', () => {
  let component: BooklistviewComponent;
  let fixture: ComponentFixture<BooklistviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooklistviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
