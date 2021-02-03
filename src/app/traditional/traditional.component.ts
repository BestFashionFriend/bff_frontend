import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.css']
})
export class TraditionalComponent implements OnInit {

  traditionalwear;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.data.getTraditionalwear().subscribe(d=>{
      this.traditionalwear=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
{    
    var t = this.traditionalwear[idx];
  this.cart.sendCartItems(t);
  alert('added one time');
}
else
alert('Login to add');
}

}