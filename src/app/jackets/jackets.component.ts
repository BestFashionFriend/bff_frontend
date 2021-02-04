import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css']
})
export class JacketsComponent implements OnInit {
jackets;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

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
    else{
    alert('Login to add');
    this.router.navigate(['../login']);
    }
}

}