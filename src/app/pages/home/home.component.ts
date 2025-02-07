import {  Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/products/product.service';
import { Iproduct } from '../../shared/interface/iproduct';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Icategores } from '../../shared/interface/icategores';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
 private readonly productService=inject(ProductService);
 private readonly categoriesService=inject(CategoriesService);
 

 customMainClider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  nav: true
}


 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}


products :  Iproduct []=[];
categores:Icategores[]=[];

  getProuductsData():void{
 this.productService.getAllProuducts().subscribe({
    next: (res) =>{
      console.log(res.data)
      this.products=res.data
        },
    error: (err) =>{
      console.log(err)
      
    }
   })
}
 ngOnInit(): void {
this.getProuductsData()
this.getCategoresData()
 }

 getCategoresData():void{
this.categoriesService.getCategories().subscribe({
  next: (res)=>{
    console.log(res.data)
this.categores=res.data;
  },
  error: (err)=>{
    console.log(err)
  }
})
 }
}
