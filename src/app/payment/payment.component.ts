import { Component, OnInit,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
 
import { StripeService, StripeCardComponent } from 'ngx-stripe';
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

constructor(private http : HttpClient,private fb: FormBuilder, private stripeService: StripeService) {}

ngOnInit(): void {
  this.stripeTest = this.fb.group({
    name: ['', [Validators.required]]
  });
}

createToken(): void {
  const name = this.stripeTest.get('name').value;
  this.stripeService
    .createToken(this.card.element, { name })
    .subscribe((result) => {
      if (result.token) {
        // Use the token
        console.log(result.token.id);
      
      
this.http.post("http://localhost:3000/payme",{
  token : result.token.id
}).subscribe(
(res)=>{
  console.log("The response from server is ",res);
  console.log('Payment Done')
},
(err)=>{
  console.log('The error is ',err)
})
      
}  
      
      else {
        // Error creating the token
        console.log(result.error.message);
      }
    });
}
  
}

