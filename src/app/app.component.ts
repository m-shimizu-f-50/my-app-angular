import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '私の最初のAngular';
  description = '説明テキストですよ';
  childMessage = '初期値';
}
