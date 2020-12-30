import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(private cart: CartService,private data: DataService,private auth: AuthService) { }
cartItems=[];
sum;
id;
manuFiledata:any={};
  ngOnInit() {
    
    
    this.auth.getId().subscribe(d => {
      this.id=d;
     console.log(`id in cart`+this.id);
      this.auth.getItems(this.id).subscribe(d => {
        this.manuFiledata = d;
        console.log(`file manudata in pdf `+(this.manuFiledata));
        this.cartItems=(JSON.parse(this.manuFiledata));
      });
    });
  }

remove(indx) {
    this.cart.cartItems.splice(indx, 1);
  }
  checkOut() {
    this.data.completeOrder(this.cartItems).subscribe(res => 
      { alert("Checkout Successful"); }
    )
  }

  totalamount()
  {
    
  }
  

}
