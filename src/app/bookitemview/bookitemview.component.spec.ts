import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookitemviewComponent } from './bookitemview.component';

describe('BookitemviewComponent', () => {
  let component: BookitemviewComponent;
  let fixture: ComponentFixture<BookitemviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookitemviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookitemviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
