import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/models';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(NewProductComponent:NgForm){
    let product : Product;
    product = <Product>NewProductComponent.form.value;
    
    console.log(product.productName);
    //product.name=NewProductComponent.name;
  }

}
