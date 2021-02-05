import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import {AuthService}from '../auth.service';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { Router } from '@angular/router';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  step = 0;
  manudata: any = {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  stripeTest: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private stripeService: StripeService, private cart: CartService, private router: Router,private auth: AuthService) { }
  cartItems = [];
  total = 0;
  i;
  ngOnInit(): void {

    // this.Form = this.fb.group({
    //   phoneNo: [''],
    //   address: [''],
    //   locality: [''],
    //   pincode: [''],
    //   city: [''],
    //   landmark: [''],
    //   state: [''],
    //   amount: [''],
    // });

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.cartItems = this.cart.cartItems;
    for (this.i = 0; this.i < this.cartItems.length; this.i++) {
      this.total = this.total + this.cartItems[this.i].price;
    }
    this.total = this.total + 50;
    this.manudata.amount = this.total;
    
   
  }

  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          this.http.post(`http://localhost:3000/payme/${this.total}`, {
            token: result.token.id
          }).subscribe(
            (res) => {
              console.log("The response from server is ", res);
              alert('Payment Done');   
              
             
              console.log("manudata"+this.manudata);
              this.auth.checkoutItems(this.manudata);
              this.router.navigate(['']);
            },
            (err) => {
              console.log('The error is ', err)
            })
        }
        else {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

}

