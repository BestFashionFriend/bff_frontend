import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css']
})
export class JacketsComponent implements OnInit {
jackets;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.data.getJackets().subscribe(d=>{
      this.jackets=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var jacket = this.jackets[idx];
  this.cart.sendCartItems(jacket);
  alert('added one time');
    }
    else
    alert('Login to add');
}

}