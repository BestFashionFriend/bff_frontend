import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blouses',
  templateUrl: './blouses.component.html',
  styleUrls: ['./blouses.component.css']
})
export class BlousesComponent implements OnInit {

  blouses;
  isAdded = false;
  constructor(private data: DataService, private cart: CartService, private authservice: AuthService) { }

  ngOnInit() {
    this.data.getBlouses().subscribe(data => {
      this.blouses = data;
    });
  }
  addItem(idx) {
    if (this.authservice.isAuthenticated) {
      var blouse = this.blouses[idx];
      //this.cart.cartItems.push(blouse);
      this.cart.sendCartItems(blouse);

      alert('added one item');

    }
    else {
      alert("Login to add");
    }
  }

}