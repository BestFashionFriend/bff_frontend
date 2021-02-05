import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import {AuthService}from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(private cart: CartService,private data: DataService,private auth: AuthService,private route:Router) { }
cartItems=[];
name;
sum;
id;
manuFiledata:any={};
 i;
 total=0;
 amount;
  ngOnInit() { 
    this.auth.getId().subscribe(d => {
      this.id=d;
    // console.log(`id in cart`+this.id);
      this.auth.getItems(this.id).subscribe(d => {
        this.manuFiledata = d;
       // console.log(`file manudata in pdf `+(this.manuFiledata));
        this.cartItems=(JSON.parse(this.manuFiledata));
        for(this.i=0;this.i<this.cartItems.length;this.i++)
        {
          this.total =this.total+this.cartItems[this.i].price;
        }
      
      });
    });   
  }

remove(indx) {
    this.name=this.cartItems[indx].name;
    this.total-=this.cartItems[indx].price;
    this.cartItems.splice(indx, 1);
    
    this.auth.deleteItems(this.name);
  }
  checkOut() {
    this.cart.cartItems=this.cartItems;
    this.route.navigate(['/payment']);
  }

  totalamount()
  {
    let i,total=0;
    for(i=0;i<this.cartItems.length;i++)
    {
      total =total+this.cartItems[i].price;
    }
    //total=total+55;
    console.log(total);
  }
  

}
