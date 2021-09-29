import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<re-captcha
  (resolved)="resolved($event)"
  siteKey="6LfMj0UcAAAAAPTnWuDysPyBpMBBcnWPABa1FMEk"
  ></re-captcha>`,
})
export class AppComponent {
  title = 'Stradivarius';
  resolved(captchaResponse: string){
    console.log(`Resolved captcha. respuesta: ${captchaResponse}`);
  }
}
