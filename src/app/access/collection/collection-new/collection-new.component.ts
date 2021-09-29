import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-collection-new',
  templateUrl: './collection-new.component.html',
  styleUrls: ['./collection-new.component.css']
})
export class CollectionNewComponent implements OnInit {

  collectionForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    price: ['', Validators.required]
  });
  
  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if(this.collectionForm.valid) {
      console.log(this.collectionForm.value);
    } else {
      alert('Formulario no valido')
    }
  }

  ngOnInit(): void {
  }

}
