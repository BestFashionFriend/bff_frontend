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
clickvalue:boolean[]= new Array(20).fill(true)
  changecolor:string[]=new Array(20).fill("btn btn-warning")
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getJackets().subscribe(d=>{
      this.jackets=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
      if(this.clickvalue[idx]==false)
        this.router.navigate(['../cart'])

      else{
    var jacket = this.jackets[idx];
  this.cart.sendCartItems(jacket);
  alert('added one time');
  this.clickvalue[idx]=false;
      this.changecolor[idx]="btn btn-success"
      }

    }
    else{
    alert('Login to add');
    this.router.navigate(['../login']);
    }
}

}