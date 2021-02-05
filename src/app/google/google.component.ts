import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(public authservice:AuthService,public router:Router) { }

  ngOnInit(): void {
    // alert('Google ts component')
    this.authservice.getgoogle()
    // this.router.navigate(['/google']);

    // alert('After stmt')
  }

}
