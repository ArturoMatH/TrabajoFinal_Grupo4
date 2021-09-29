import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service'; 
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collection = [];
  productos = [];

  constructor(private readonly ps: CollectionService,
              private readonly as: ProductoService,
              private ar: ActivatedRoute) { }

  __getCollectionById(id: number) {
    this.ps.__getCollections().subscribe((rest: any) => {
      this.collection = rest.data.filter((item: { id: number }) => item.id == id);
      console.log(this.collection);
    })
  }

  __getProductosByCollection(id: number) {
    this.as.__getProductos().subscribe((rest: any) => {
      this.productos = rest.data.filter((item: { collectionId: number }) => item.collectionId == id);
      console.log(this.productos);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if(params.id) {
        this.__getCollectionById(params.id);
        this.__getProductosByCollection(params.id);
      }
    })
  }

}
