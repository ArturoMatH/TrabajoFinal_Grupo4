import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-new',
  templateUrl: './producto-new.component.html',
  styleUrls: ['./producto-new.component.css']
})
export class ProductoNewComponent implements OnInit {

  productoForm = this.fb.group({
    type: ['', Validators.required],
    name: ['', Validators.required],
    size: ['', Validators.required],
    floor: ['']
  });

  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if(this.productoForm.valid) {
      console.log(this.productoForm.value);
    } else {
      alert('Formulario no valido');
    }
  }

  ngOnInit(): void {
  }

}
