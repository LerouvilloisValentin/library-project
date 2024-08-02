import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  private nextId = 1;
  private apiUrl = 'http://localhost:3001/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
  addBook(
    title: string,
    author: string,
    description: string,
    status: boolean
  ): Observable<void> {
    // const newBook: Book ={id: this.nextId++, title,author, status};
    return this.http.post<void>(this.apiUrl, {
      title,
      author,
      description,
      status,
    });
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${book.id}`, book);
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}
