import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSixComponent } from './book-six.component';

describe('BookSixComponent', () => {
  let component: BookSixComponent;
  let fixture: ComponentFixture<BookSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
