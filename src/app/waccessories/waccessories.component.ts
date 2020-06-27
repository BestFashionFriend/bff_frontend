import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-waccessories',
  templateUrl: './waccessories.component.html',
  styleUrls: ['./waccessories.component.css']
})
export class WaccessoriesComponent implements OnInit {

  womenaccessories;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.data.getWomenaccessories().subscribe(d=>{
      this.womenaccessories=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var wa = this.womenaccessories[idx];
  this.cart.cartItems.push(wa);
  alert('added one item');
    }
    else
    alert('Login to add');
}
}