import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bottomwear',
  templateUrl: './bottomwear.component.html',
  styleUrls: ['./bottomwear.component.css']
})
export class BottomwearComponent implements OnInit {
  bottomwear;
  clickvalue:boolean[]= new Array(20).fill(true)
  changecolor:string[]=new Array(20).fill("btn btn-warning")
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getBottomwear().subscribe(d=>{
      this.bottomwear=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
      if(this.clickvalue[idx]==false)
        this.router.navigate(['../cart'])

      else{
    var wbottom = this.bottomwear[idx];
  this.cart.sendCartItems(wbottom);
  alert('added one item');
  this.clickvalue[idx]=false;
      this.changecolor[idx]="btn btn-success"
      }

    }
    else
    {
      alert('login to add');
     this.router.navigate(['../login']);

    }
   
}
}