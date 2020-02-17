import { Injectable } from '@angular/core';
import { Brand } from '../Models/models';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfectServiceService {
   brandCollection:AngularFirestoreCollection<Brand>;
 


  constructor(private afs: AngularFirestore) { 
  }

 async CheckIfExists(brand:Brand){
  return this.afs.collection('brands').ref.where('brandName','==',brand.brandName.toLowerCase()).get();
}
 
  async CreateBrand(brand: Brand)
  {
    brand.brandName = brand.brandName.toLowerCase();
    return this.afs.doc(`/brands/${brand.brandId}`).set(brand);
  }
   GetAllBrands(){
    return this.afs.collection('brands').snapshotChanges();
  }
  UpdateBrand(brand:Brand){
    return this.afs.doc(`brands/${brand.brandId}`).update(brand);
  }
  DeleteBrand(brand:Brand){
    return this.afs.doc(`brands/${brand.brandId}`).delete();
  }
}
