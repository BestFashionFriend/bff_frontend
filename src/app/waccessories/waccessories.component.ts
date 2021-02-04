import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-waccessories',
  templateUrl: './waccessories.component.html',
  styleUrls: ['./waccessories.component.css']
})
export class WaccessoriesComponent implements OnInit {

  womenaccessories;
  clickvalue:boolean[]= new Array(20).fill(true)
  changecolor:string[]=new Array(20).fill("btn btn-warning")
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getWomenaccessories().subscribe(d=>{
      this.womenaccessories=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
      if(this.clickvalue[idx]==false)
        this.router.navigate(['../cart'])

      else{
    var wa = this.womenaccessories[idx];
  this.cart.sendCartItems(wa);
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