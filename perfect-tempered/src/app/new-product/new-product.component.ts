import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/models';
import {NgForm} from '@angular/forms';
import { empty } from 'rxjs';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  private notifier: NotifierService;
  public constructor( notifier: NotifierService ) {
		this.notifier = notifier;
  }
  public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}

  ngOnInit() {
  }
  onSubmit(NewProductComponent:NgForm){
    let product : Product;
    product = <Product>NewProductComponent.form.value;
    if(product.productName==null||product.productName==""){
      console.log(product.productName);
      this.notifier.notify( 'error','Product name is Required');
      return false;
    }
    // if( product.photo.size == 0){
    //   console.log(product.photo);
    //   this.notifier.notify( 'error','no files selected');
    //   return false;
    // }
    
    if(product.rate==null||product.rate==""){
      console.log(product.rate);
      this.notifier.notify( 'error','Rate is Required');
      return false;
    }
  }
}
  