import { Injectable } from "@angular/core";
import { IProduct } from "./Iproduct";

@Injectable()

export class ProductListService{

    getProductList(): IProduct[]{
        return [{
            name : 'product 1',
            Id: 1,
            image: '9613929_fpx.tif',
            price: 10,
            selectedQuantity : 2,
            delivery : 'ship',
            starRating : 4
        },{
            name : 'product 1',
            Id: 2,
            image: '9613929_fpx.tif',
            price: 10,
            selectedQuantity : 2,
            delivery : 'ship',
            starRating : 5
        },{
            name : 'product 1',
            Id: 3,
            image: '9613929_fpx.tif',
            price: 10,
            selectedQuantity : 2,
            delivery : 'ship',
            starRating : 3
        }] 
    }
    
}
