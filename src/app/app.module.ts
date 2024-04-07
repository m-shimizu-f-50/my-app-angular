import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemManualComponent } from './item-manual/item-manual.component';
import { LessonManualComponent } from './lesson-manual/lesson-manual.component';
import { LessonIfComponent } from './lesson-if-manual/lesson-if.component';
import { LessonTemplateForm } from './lesson-templete-form/lesson-template-form.component';
import { LessonReactiveForm } from './lesson-reactive-form/lesson-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemManualComponent,
    LessonManualComponent,
    LessonIfComponent,
    LessonTemplateForm,
    LessonReactiveForm,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
