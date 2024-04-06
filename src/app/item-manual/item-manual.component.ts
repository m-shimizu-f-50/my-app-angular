import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-item-manual',
  templateUrl: './item-manual.component.html',
  styleUrls: ['./item-manual.component.css'],
})
export class ItemManualComponent {
  title = 'item-manual-component';
  @Input('data') parentMessage: string = '初期値';
  @Input('test') testMessage: string = 'test';
  @Output('test-put') testClicked = new EventEmitter<string>();
  onClick(): void {
    this.testClicked.emit('子からのメッセージ');
  }
}
