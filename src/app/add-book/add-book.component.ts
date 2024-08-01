import { Component,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Book } from '../book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  id:string ='1';
  title: string ='';
  author: string ='';
  description: string='';
  status:boolean = true;

  @Output() addBook:EventEmitter<{id:string,title:string,author:string,description:string,status:boolean}>= new EventEmitter<{id:string,title:string,author:string,description:string,status:boolean}>();

  onAddBook(): void{
  const newBook: Book = {
    id: this.id,
    title: this.title,
    author: this.author,
    description: this.description,
    status:this.status
  }
  this.addBook.emit(newBook);
  this.id = (parseInt(this.id) + 1).toString();
  this.title = '';
  this.author = '';
  this.description = '';
  }
}
