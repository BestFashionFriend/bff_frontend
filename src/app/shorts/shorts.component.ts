
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
shorts;
clickvalue:boolean[]= new Array(20).fill(true)
  changecolor:string[]=new Array(20).fill("btn btn-warning")
  constructor(private data:DataService,private cart:CartService,private authservice :AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getShorts().subscribe(d=>{
      this.shorts=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
      if(this.clickvalue[idx]==false)
        this.router.navigate(['../cart'])

      else{
    var mshorts = this.shorts[idx];
  this.cart.sendCartItems(mshorts);
  alert('added one item');
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