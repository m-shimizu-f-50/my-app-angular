import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemManualComponent } from './item-manual/item-manual.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, ItemManualComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
