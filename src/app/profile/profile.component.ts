import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userName;
id;
data:any={};
cartItems=[];
i;
total=0;
sum;
panelOpenState = false;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
this.userName=this.auth.getUserName;
this.auth.getId().subscribe(d => {
  this.id=d;
 console.log(`id in cart`+this.id);
  this.auth.getOrderItems(this.id).subscribe(d => {
    this.data = d;
    console.log(`order data `+(this.data));
    this.cartItems=(JSON.parse(this.data));
    for(this.i=0;this.i<this.cartItems.length;this.i++)
    {
      this.total =this.total+this.cartItems[this.i].price;
    }
  
  });
});
  }

}
