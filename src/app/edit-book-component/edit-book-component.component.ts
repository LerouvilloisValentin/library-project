import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.service';

@Component({
  selector: 'app-edit-book-component',
  standalone: true,
  imports: [],
  templateUrl: './edit-book-component.component.html',
  styleUrl: './edit-book-component.component.css'
})
export class EditBookComponentComponent {
  @Input() book!:Book
  @Output() remove : EventEmitter<string>=new EventEmitter<string>()

  onRemove(){
    this.remove.emit(this.book.id)
  }
}