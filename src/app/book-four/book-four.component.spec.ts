import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFourComponent } from './book-four.component';

describe('BookFourComponent', () => {
  let component: BookFourComponent;
  let fixture: ComponentFixture<BookFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
