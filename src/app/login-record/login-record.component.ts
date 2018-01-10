import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
@Component({
  selector: 'app-login-record',
  templateUrl: './login-record.component.html',
  styleUrls: ['./login-record.component.css']
})
export class LoginRecordComponent implements OnInit {
  
  loggedUser:any;
  constructor(private _data: DbService) { }

  ngOnInit() {
    this._data.logged.subscribe(res=>this.loggedUser=res);
  }


}
