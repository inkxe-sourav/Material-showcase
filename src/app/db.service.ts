import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DbService {
  private loggedUser=new BehaviorSubject<any>([]);
  logged=this.loggedUser.asObservable();
  constructor() { }
  updateArray(logged)
  {
    this.loggedUser.next(logged);
  }
}
