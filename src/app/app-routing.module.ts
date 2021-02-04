import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { BlousesComponent } from './blouses/blouses.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { WaccessoriesComponent } from './waccessories/waccessories.component';
import { BottomwearComponent } from './bottomwear/bottomwear.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { ShortsComponent } from './shorts/shorts.component';
import { JacketsComponent } from './jackets/jackets.component';
import { MenaccessoriesComponent } from './menaccessories/menaccessories.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { GoogleComponent } from './google/google.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'women',component:WomenComponent},
  {path:'men',component:MenComponent},
  {path:'blouses',component:BlousesComponent},
  {path:'bottoms',component:BottomsComponent},
  {path:'traditionalwear',component:TraditionalComponent},
  {path:'womenaccessories',component:WaccessoriesComponent},
  {path:'tshirts',component:TshirtComponent},
  {path:'bottomwear',component:BottomwearComponent},
  {path:'shorts',component:ShortsComponent},
  {path:'jackets',component:JacketsComponent},
  {path:'menaccessories',component:MenaccessoriesComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'cart',component:CartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'google',component:GoogleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
