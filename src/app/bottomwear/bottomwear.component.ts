import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-bottomwear',
  templateUrl: './bottomwear.component.html',
  styleUrls: ['./bottomwear.component.css']
})
export class BottomwearComponent implements OnInit {
  bottomwear;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.data.getBottomwear().subscribe(d=>{
      this.bottomwear=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var wbottom = this.bottomwear[idx];
  this.cart.sendCartItems(wbottom);
  alert('added one item');
    }
    else
    alert('login to add');
}
}