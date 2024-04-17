import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Page {
  title: string;
  text: string;
  image: string;
}

interface Book {
  bookTitle: string;
  author: string;
  publishedDate: string;
  content: Page[];
}


@Component({
  selector: 'app-book-five',
  templateUrl: './book-five.component.html',
  styleUrls: ['./book-five.component.sass']
})
export class BookFiveComponent {
  book?: Book;
  currentPage = 1;
  bookTitle!: string;
  bookAuthor!: string;
  bookPublishedDate!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Book>('/assets/bok-5.json').subscribe(book => {
      this.book = book;
      this.bookTitle = book.bookTitle;
      this.bookAuthor = book.author;
      this.bookPublishedDate = book.publishedDate;
    });
  }
  

  get currentPageData() {
    return this.book?.content[this.currentPage - 1];
  }
  
  get totalPages() {
    return this.book?.content.length || 0;
  }

  get getBookData() {
    return this.book?.content;
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
