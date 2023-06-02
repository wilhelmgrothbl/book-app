export interface Book {
    title: string;
    author: string;
    publishedDate: string;
    content: {
      page: number;
      title: string;
      text: string;
    }[];
  }
  