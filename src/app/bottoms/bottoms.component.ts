import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css']
})
export class BottomsComponent implements OnInit {
bottoms;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.data.getBottoms().subscribe(d=>{
      this.bottoms=d;
    })
  }
  
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var bottom = this.bottoms[idx];
  this.cart.sendCartItems(bottom);
  alert('added one item');
    }
    else
    alert('Login to add');


 }

}