import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Brand } from '../Models/models';
import { PerfectServiceService } from '../Services/perfect-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brandList: Brand[];
  constructor(private perfectService: PerfectServiceService) { }

  ngOnInit() {
    this.perfectService.GetAllBrands().subscribe(actionArray => {
      this.brandList = actionArray.map(item => {
        return {
          //brandId: item.payload.doc.id,
          ...item.payload.doc.data(),
        } as Brand;
      })
      console.log (this.brandList);  
      
      //this.perfectService.UpdateBrand();
      //1581946115885
    });
   
  }
   onSubmit(form:NgForm){
    const brand = <Brand>form.value;
    const validBrandName = brand.brandName;
    let id = new Date().getTime();
    let resp:any;
    brand.brandId = id;
   this.perfectService.CheckIfExists(brand).then((result)=>
     {
      if (result.empty) {
        this.perfectService.CreateBrand(brand).then(
          ()=>alert(`${validBrandName} - has been created successfully`)
        ).catch((error)=> {
          alert("Error: Contact Administrator");
          console.log(error)
        });
      }
      else
        alert(`${validBrandName} brand already exists`);  
      }).catch((error)=> {
        alert("Error: Contact Administrator");
        console.log(error)
          }).finally(
            () => {form.reset()}
          );
  }
  onUpdate(){
    //Call the service mothod with the object 
  }
  onDelete(){
    //Call the service method with the object
  }

}

