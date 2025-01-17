import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {Book, BookService } from '../book.service';
import { Observable } from 'rxjs';
import { EditBookComponentComponent } from "../edit-book-component/edit-book-component.component";
import { AddBookComponent } from "../add-book/add-book.component";
import { Router } from '@angular/router';
import { BookDetailComponent } from "../book-detail/book-detail.component";

@Component({
  selector: 'app-book-list-component',
  standalone: true,
  imports: [CommonModule, EditBookComponentComponent, AddBookComponent, BookDetailComponent],
  templateUrl: './book-list-component.component.html',
  styleUrl: './book-list-component.component.css'
})

export class BookListComponentComponent {
  books$:Observable<Book[]>


  constructor(private bookService :BookService, private router:Router){
    this.books$=this.bookService.getBooks()
    this.books$.subscribe(books => {
      console.log(books); // Inspectez ici les données reçues
    });
  }

  ngOnInit(): void{
    this.books$ = this.bookService.getBooks();
  }

  addBookService({title, author,description, status}:{title:string, author:string, description: string ,status: boolean}):void{
    this.bookService.addBook(title,author,description,status).subscribe(()=>{
      this.books$=this.bookService.getBooks()
    })
  }

  removeBook(id:string):void{
    this.bookService.remove(id).subscribe(()=>{
      this.books$=this.bookService.getBooks()
    })
  }

  updateBook(updatedBook: Book): void {
    this.bookService.updateBook(updatedBook).subscribe(() => {
      this.books$ = this.bookService.getBooks();  // Met à jour la liste des livres
    });
  }

  viewDetail(id:string):void{
    this.router.navigate(['/detail', id] )
  }

}
