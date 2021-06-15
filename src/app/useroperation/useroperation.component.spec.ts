import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroperationComponent } from './useroperation.component';

describe('UseroperationComponent', () => {
  let component: UseroperationComponent;
  let fixture: ComponentFixture<UseroperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseroperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
