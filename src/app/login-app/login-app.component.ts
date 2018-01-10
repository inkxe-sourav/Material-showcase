import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
  
  userName:string="";
  userPass:string="";
  showRight:boolean=false;
  showWrong:boolean=false;
  showSpinner: boolean = false;
  loggedUser=[];
  constructor(private _data: DbService) { }

  ngOnInit() {
    this._data.logged.subscribe(res=>this.loggedUser=res);
    this._data.updateArray(this.loggedUser);
  }
  

  Login(){
    if(this.userPass=="1234")
      { 
        this.showSpinner = true;
        setTimeout(() => {
          this.showRight=true;this.showWrong=false;
          this.showSpinner = false;
          this.loggedUser.push(this.userName);
          this._data.updateArray(this.loggedUser);
        }, 2000);
       
      }
      else
      {
        
        this.showSpinner = true;
        setTimeout(() => {
          this.showWrong=true;this.showRight=false;
          this.showSpinner = false;
        }, 2000);
      }
  }
  Reset()
  {
    this.userName="";
    this.userPass="";
    this.showRight=false;
    this.showWrong=false;
  }
}
