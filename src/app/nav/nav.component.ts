import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
       console.log('yes');
    }, error => {
      console.log('no');
    });
  }

  logout(){
    localStorage.removeItem('token');
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    // this is equivalent if(token)-> true : false
    return !!token;
  }

}
