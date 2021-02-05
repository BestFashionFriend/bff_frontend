import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {
  tshirt;
  clickvalue:boolean[]= new Array(20).fill(true)
  changecolor:string[]=new Array(20).fill("btn btn-warning")
  constructor(private data:DataService, private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getTshirt().subscribe(d=>{
      this.tshirt=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
      if(this.clickvalue[idx]==false)
        this.router.navigate(['../cart'])

      else{
    var ts = this.tshirt[idx];
  this.cart.sendCartItems(ts);
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