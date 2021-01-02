import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { BlousesComponent } from './blouses/blouses.component';
import { EthnicComponent } from './ethnic/ethnic.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { WaccessoriesComponent } from './waccessories/waccessories.component';
import { BottomwearComponent } from './bottomwear/bottomwear.component';
import { JacketsComponent } from './jackets/jackets.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { MenaccessoriesComponent } from './menaccessories/menaccessories.component';
import { ShortsComponent } from './shorts/shorts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthinterceptorService} from './authinterceptor.service';
import {AuthService}from './auth.service';
import {ApiService} from './api.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { NgxStripeModule } from 'ngx-stripe';
import { PaymentComponent } from './payment/payment.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutusComponent,
    WomenComponent,
    MenComponent,
    FooterComponent,
    BlousesComponent,
    EthnicComponent,
    BottomsComponent,
    TraditionalComponent,
    WaccessoriesComponent,
    BottomwearComponent,
    JacketsComponent,
    TshirtComponent,
    MenaccessoriesComponent,
    ShortsComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxStripeModule.forRoot('pk_test_51I4nk6A50Rsn1srPsJaqhn7SwTXX4y0xaU9rOfanl2IwO8ynSbRfqoUzcpIky4iY6hKViW2eqzqDk3vp2MDkqDhh00EdHMdExv')
    
  ],
  providers: [ApiService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthinterceptorService,
    multi :true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
