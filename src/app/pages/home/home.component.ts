import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collections = [];

  constructor(private readonly ps: CollectionService) { }

  __getCollections() {
    this.ps.__getCollections().subscribe((rest: any) => {
      console.log(rest.data);
      this.collections = rest.data;
    })
  }

  ngOnInit(): void {
    this.__getCollections();
  }

}
