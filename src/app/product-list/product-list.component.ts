import { Component, OnInit } from "@angular/core";
import { IProduct } from '../shared/Iproduct';
import { ProductListService } from "../shared/product.service";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductList implements OnInit {

    productList : IProduct[];
    private _productList: ProductListService;
    
    imgWidth: number = 200;
    imgHeight: number = 200;

    constructor(ProductListService : ProductListService){       
        this._productList = ProductListService;
    } 

    showProduct() {
        console.log("=======1");
    }

    ngOnInit(){
        this.productList = this._productList.getProductList();
    }

}