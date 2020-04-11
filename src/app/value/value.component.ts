import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('https://localhost:44398/WeatherForecast')
    .subscribe(response => {
      this.values = response;
      console.log(this.values );
    }, error => {
        console.log(error);
    });
  }

}
