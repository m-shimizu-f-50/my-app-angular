import { Component } from '@angular/core';
@Component({
  selector: 'app-lesson-if',
  templateUrl: './lesspm-if.component.html',
})
export class LessonIfComponent {
  isActive = true;
  toggle(): void {
    this.isActive = !this.isActive;
  }
  items = [
    { name: 'BookA', price: 400 },
    { name: 'BookB', price: 500 },
    { name: 'BookC', price: 300 },
  ];
}
