import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemManualComponent } from './item-manual/item-manual.component';
import { LessonManualComponent } from './lesson-manual/lesson-manual.component';
import { LessonIfComponent } from './lesson-if-manual/lesson-if.component';
import { LessonTemplateForm } from './lesson-templete-form/lesson-template-form.component';
import { LessonReactiveForm } from './lesson-reactive-form/lesson-reactive-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemManualComponent,
    LessonManualComponent,
    LessonIfComponent,
    LessonTemplateForm,
    LessonReactiveForm,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
