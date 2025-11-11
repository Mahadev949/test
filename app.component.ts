import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  user = {
    name: '',
    email: ''
  };
  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      alert('Form submitted successfully!');
    }
  }
}
