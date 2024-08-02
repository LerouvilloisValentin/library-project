import { Routes } from '@angular/router';
import { BookListComponentComponent } from './book-list-component/book-list-component.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
  { path: '', component: BookListComponentComponent },
  { path: 'detail/:id', component: BookDetailComponent },
];
