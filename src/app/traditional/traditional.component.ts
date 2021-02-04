import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.css']
})
export class TraditionalComponent implements OnInit {

  traditionalwear;
  constructor(private data:DataService,private cart:CartService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.data.getTraditionalwear().subscribe(d=>{
      this.traditionalwear=d;
    })
  }
  addItem(idx){
    if(this.authservice.isAuthenticated)
{    
    var t = this.traditionalwear[idx];
  this.cart.sendCartItems(t);
  alert('added one time');
}
else{
alert('Login to add');
this.router.navigate(['../login']);
}
}

}