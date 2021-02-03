import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authservice:AuthService,private cart: CartService) { }
  ngOnInit(): void {
  }

}
