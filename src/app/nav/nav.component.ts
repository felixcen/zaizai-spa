import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('login successful');
    }, error => {
      console.log(error);
      this.alertifyService.error(error);
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    // this is equivalent if(token)-> true : false
    return !!token;
  }

}
