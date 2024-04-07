import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-template-form',
  templateUrl: './lesson-template-form.component.html',
})
export class LessonTemplateForm {
  user = {
    email: 'sample@email.com',
    name: 'Jone Doe',
  };

  submit(): void {
    console.log(this.user);
  }
}
