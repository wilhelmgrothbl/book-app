import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFiveComponent } from './book-five.component';

describe('BookFiveComponent', () => {
  let component: BookFiveComponent;
  let fixture: ComponentFixture<BookFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
