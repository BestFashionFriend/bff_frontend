import { Injectable } from '@angular/core';
import {AuthService}from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
   id;
  //path= 'https://bestfashionfriend.herokuapp.com';
  path='http://localhost:3000'
  constructor(private authservice:AuthService,private http:HttpClient) { }
  sendCartItems(item)
  {
    this.cartItems.push(item);
    this.authservice.sendItems(item);
  }

  deleteItems()
  {
    
  }
 
}
