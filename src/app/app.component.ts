import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { product } from 'src/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  products:product[]=[];

  newProduct:product =new product(0,"product_name");
  constructor(private service:ProductService){}
  ngOnInit(){
    this.service.getAllProducts().subscribe(c=>this.products=c);
  }

   addProduct(){
    console.log("called")
    if(this.newProduct.id!=0 && this.newProduct.productName!="product_name"){
      console.log("adding")
      this.service.addProduct(this.newProduct).subscribe(x=>{
        console.log(x);
        this.service.getAllProducts().subscribe(c=>this.products=c);
      });
      
    }
  }

  deleteProduct(p:product){
    this.service.deleteProduct(p).subscribe(x=>{
      console.log(x.toString());
      this.service.getAllProducts().subscribe(c=>this.products=c);
    });
  }
}
