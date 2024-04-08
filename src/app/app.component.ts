import { Component } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '私の最初のAngular';
  description = '説明テキストですよ';
  childMessage = '初期値';

  // サービスクラスのインスタンス化
  constructor(private bookService: BookService) {}

  // サービスクラスを利用した情報の取得
  getBooks(): Array<{ name: string; price: number }> {
    return this.bookService.books;
  }
}
