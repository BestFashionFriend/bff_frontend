import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {
  tshirt;
  constructor(private data:DataService, private cart:CartService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.data.getTshirt().subscribe(d=>{
      this.tshirt=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var ts = this.tshirt[idx];
  this.cart.sendCartItems(ts);
  alert('added one item');
    }
    else
    alert('Login to add');
}

}