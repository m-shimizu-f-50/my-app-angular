import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-item-manual',
  templateUrl: './item-manual.component.html',
  styleUrls: ['./item-manual.component.css'],
})
export class ItemManualComponent implements OnChanges, OnInit {
  title = 'item-manual-component';
  temperature = 0.0;
  @Input('data') parentMessage: string = '初期値';
  @Input('test') testMessage: string = 'test';
  @Output('test-put') testClicked = new EventEmitter<string>();
  onClick(): void {
    this.testClicked.emit('子からのメッセージ');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // API通信にてOpen-Meteoの天気情報を取得する
    this.http
      .get(
        'https://api.open-meteo.com/v1/forecast?longitude=139.8107004&latitude=35.7100627&current_weather=true'
      )
      .subscribe((response: any) => {
        // 取得後、データから気温情報を設定する
        this.temperature = response?.current_weather?.temperature;
      });
  }
}
