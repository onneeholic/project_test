import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  temp: any[] = [];
  row: any[] = [];
  key:string =  "";
  constructor(
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getData();

  }

  getData() {
    this._api
      .getdata()
      .then((resp) => {
        this.row = resp;  
        this.temp = resp;  
      })
      .catch((err) => {      
      });
  }

  fildata(){
    console.log(this.key);
    this.row = this.temp.filter((item) => {
      // console.log(item);
      return (
        (this.key != ""
        ? item.toString().includes(this.key)
        : true)
      );
    });

    // console.log(this.row);
  }


}
