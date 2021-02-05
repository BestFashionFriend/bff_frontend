import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-menaccessories',
  templateUrl: './menaccessories.component.html',
  styleUrls: ['./menaccessories.component.css']
})
export class MenaccessoriesComponent implements OnInit {
menaccessories
clickvalue:boolean[]= new Array(20).fill(true)
  changecolor:string[]=new Array(20).fill("btn btn-warning")
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getMenaccessories().subscribe(d=>{
      this.menaccessories=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
      if(this.clickvalue[idx]==false)
        this.router.navigate(['../cart'])

      else{
    var ma = this.menaccessories[idx];
  this.cart.sendCartItems(ma);
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