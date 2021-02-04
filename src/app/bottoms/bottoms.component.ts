import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css']
})
export class BottomsComponent implements OnInit {
bottoms;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getBottoms().subscribe(d=>{
      this.bottoms=d;
    })
  }
  
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var bottom = this.bottoms[idx];
  this.cart.sendCartItems(bottom);
  alert('added one item');
    }
    else
    {
      alert('Login to add');
     this.router.navigate(['/login']);

    }


 }

}