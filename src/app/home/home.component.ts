import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   registerMode = false;
   values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle(){
    this.registerMode = true;
  }

  cancelRegiterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }

  getValues(){
    this.http.get('https://localhost:44398/api/auth/info')
    .subscribe(response => {
      this.values = response;
      console.log(this.values );
    }, error => {
        console.log(error);
    });
  }
}
