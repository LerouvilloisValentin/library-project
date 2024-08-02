import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService, Book } from '../book.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
viewDetail(arg0: string) {
throw new Error('Method not implemented.');
}
  book!: Book;
  bookForm!: FormGroup;
  books$:Observable<Book[]>

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {this.books$=this.bookService.getBooks()}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe((book) => {
      this.book = book;
      this.bookForm = this.fb.group({
        title: [this.book.title],
        author: [this.book.author],
        description: [this.book.description],
        status: [this.book.status]
      });
    });
  }
  
  updateAndSaveBook(): void {
    if (this.bookForm.valid) {
      const updatedBook = { ...this.book, ...this.bookForm.value };

      this.bookService.updateBook(updatedBook).subscribe(() => {
        this.books$ = this.bookService.getBooks();  // Met à jour la liste des livres
      });
    }
  }
}
