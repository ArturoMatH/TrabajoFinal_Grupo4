import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  isHuman = false

  public resolved(captchaResponse: string): void {
    console.log(`Captcha resuelto: ${captchaResponse}`);
    this.isHuman = true
    // Funcionó
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`Captcha error: ${errorDetails}`);
    this.isHuman = false
    // Falló
  }

  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value);
    } else {
      alert('Formulario no valido!!!');
    }
  }

  ngOnInit(): void {
  }

}