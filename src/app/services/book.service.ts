import { Injectable } from '@angular/core';

// サービスクラスであることを宣言
// モジュールへの登録をせずコンポーネントに対してサービスの引き渡しが可能
@Injectable({
  providedIn: 'root',
})
export class BookService {
  books = [
    { name: 'BookA', price: 400 },
    { name: 'BookB', price: 500 },
    { name: 'BookC', price: 300 },
  ];

  constructor() {}

  getBooks(): Array<{ name: string; price: number }> {
    return this.books;
  }
}
