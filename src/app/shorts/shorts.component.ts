
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
  constructor(private data:DataService,private cart:CartService,private authservice :AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getShorts().subscribe(d=>{
      this.shorts=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
    {
    var mshorts = this.shorts[idx];
  this.cart.sendCartItems(mshorts);
  alert('added one item');
    }
    else{
    alert('Login to add');
    this.router.navigate(['../login']);

    }
}
}