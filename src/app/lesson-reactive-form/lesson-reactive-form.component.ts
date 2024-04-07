import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson-reactive-form',
  templateUrl: './lesson-reactive-form.component.html',
})
export class LessonReactiveForm {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  reactiveSubmit(): void {
    console.log(this.userForm.value);
  }
}
