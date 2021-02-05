import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blouses',
  templateUrl: './blouses.component.html',
  styleUrls: ['./blouses.component.css']
})
export class BlousesComponent implements OnInit {

  blouses;
  isAdded = false;
  clickvalue:boolean[]= new Array(20).fill(true)
  changecolor:string[]=new Array(20).fill("btn btn-warning")
    constructor(private data: DataService, private cart: CartService, private authservice: AuthService,private router:Router) { }

  ngOnInit() {
    this.data.getBlouses().subscribe(data => {
      this.blouses = data;
      
    });
    
  }
  

  addItem(idx) {
    if (this.authservice.isAuthenticated) {
      if(this.clickvalue[idx]==false)
        this.router.navigate(['../cart'])

      else{
      var blouse = this.blouses[idx];
      //this.cart.cartItems.push(blouse);
      this.cart.sendCartItems(blouse);

      alert('added one item');
      this.clickvalue[idx]=false;
      this.changecolor[idx]="btn btn-success"
      }

    }
    else {
      alert("Login to add");
     this.router.navigate(['../login']);

    }
  }

}
