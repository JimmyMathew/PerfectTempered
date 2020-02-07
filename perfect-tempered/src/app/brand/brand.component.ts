import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(brand:NgForm){
    console.log(brand);
  }

}

