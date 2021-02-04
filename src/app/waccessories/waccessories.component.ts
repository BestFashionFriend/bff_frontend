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
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getWomenaccessories().subscribe(d=>{
      this.womenaccessories=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var wa = this.womenaccessories[idx];
  this.cart.sendCartItems(wa);
  alert('added one item');
    }
    else{
    alert('Login to add');
    this.router.navigate(['../login']);

    }

}
}