import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemManualComponent } from './item-manual/item-manual.component';
import { LessonManualComponent } from './lesson-manual/lesson-manual.component';
import { LessonIfComponent } from './lesson-if-manual/lesson-if.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemManualComponent,
    LessonManualComponent,
    LessonIfComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
