
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';
  public data = {
    firstname: '',
    lastname: ''
  };




  public send(form: NgForm) {
    if(!form.valid) {
      for(let k in form.controls) {
        const c = form.controls[k];
        c.markAllAsTouched();
        c.
      }

      return;
    }
    console.log('invio', form.value, form.valid);
  }

  public setDefault() {
    this.data.firstname = 'pippo';
    this.data.lastname = 'rossi';
  }

  public lastnameError(form: NgForm, errorName: string) {
    const err = form.controls['lastname']?.errors;
    return err ? err[errorName] : null;    
  }
}
