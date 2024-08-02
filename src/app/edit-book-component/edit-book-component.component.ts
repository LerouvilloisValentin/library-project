import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-book-component',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit-book-component.component.html',
  styleUrl: './edit-book-component.component.css'
})
export class EditBookComponentComponent {
  @Input() book!:Book
  @Output() remove : EventEmitter<string>=new EventEmitter<string>()

  bookForm!: FormGroup;

  constructor(private fb:FormBuilder){}


  ngOnInit(): void {
    // Initialisation du formulaire réactif avec les valeurs du livre
    this.bookForm = this.fb.group({
      title: [this.book.title],
      author: [this.book.author],
      description: [this.book.description],
      status: [this.book.status]
    });
  }

  onRemove() {
    this.remove.emit(this.book.id);
  }

}
