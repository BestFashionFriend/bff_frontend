import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  Username = 'username';
  id: any;

  path= 'https://bestfashionfriend.herokuapp.com';
  //path = 'http://localhost:3000'
  TOKEN_KEY = 'token'

  constructor(private http: HttpClient, private router: Router) { }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  sendRegistrationData(registerData) {
    this.http.post<any>(this.path + '/register', (registerData)).subscribe(res => {
      alert('Registration Success');
      this.router.navigate(['/login']);
    },
    (error) => {
      alert('User Already Exists!');
      this.router.navigate(['/login']);
     
      
    });
  }

  loginuserData(loginData) {
    this.Username = loginData.email;
    localStorage.setItem('username', this.Username);
    this.http.post<any>(this.path + '/login', loginData).subscribe((res: { token: string }) => {
      alert('Login Success');
      localStorage.setItem('token', res.token);
    },
      (error) => {
        alert('Invalid Username or password');
        this.router.navigate(['/login']);
      });
  }

  get getUserName() {
    return localStorage.getItem('username');
  }

  getId() {
    let username = this.getUserName;
    //console.log(`username `+username);
    return this.http.get<any>(this.path + `/auth/${username}`)
  }

  sendItems(item) {
    this.getId().subscribe(d => {
      this.id = d;
     //  console.log(`id in sendItems`+this.id);
      // console.log(item)
      this.http.post<any>(this.path + `/carts/${this.id}`, item).subscribe((res) => {
        //alert('Item added in DB');
      }),
        (error) => {
          alert('Items did not get added');
        }
    })
  }
  
  checkoutItems(item) {
    this.getId().subscribe(d => {
      this.id = d;
      item.email = this.getUserName;
       console.log(` checkoutItems`+item);
      // console.log(` checkoutItems`+item);
      this.http.post<any>(this.path + `/checkouts/${this.id}`, item).subscribe((res) => {
        //alert('Item added in DB');
        

      }),
        (error) => {
          alert('Items did not get added');
        }
    })
  }

  sendOrderItems(item) {
    this.getId().subscribe(d => {
      this.id = d;
      // console.log(`id in sendItems`+this.id);
      // console.log(item)
      this.http.post<any>(this.path + `/checkouts/${this.id}`, item).subscribe((res) => {
        //alert('Item added in DB');
      }),
        (error) => {
          alert('Items did not get added');
        }
    })
  }
  deleteItems(name)
  {
   // console.log('front end hey');
    this.http.delete<any>(this.path + `/delete/${name}`)  .subscribe({
      next: data => {
          console.log( 'Delete successful');
      },
      error: error => {
        console.log( 'error');
      }
  });
  }
  deleteCheckoutItems()
  {
    //console.log('delete cart items');
    this.http.delete<any>(this.path + `/delcheckout/${this.id}`)  .subscribe({
      next: data => {
          console.log( 'Delete successful');
      },
      error: error => {
        console.log( 'error');
      }
  });
  }
  getItems(id) {
    //console.log(`id in getItems` + id);
    return this.http.get<any>(this.path + `/cart/${id}`)
  }
  getOrderItems(id)
  {
   // console.log(`id in getOrderItems` + id);
    return this.http.get<any>(this.path + `/checkouts/${id}`)
  }
  getgoogle(){
    return this.http.get<any>(this.path + '/google')
    .subscribe(res => {
      alert('Registration Success');
    }),
    (error) => {
      alert('Registration Failed');
      // this.router.navigate(['/google']);
    }
  }
}
