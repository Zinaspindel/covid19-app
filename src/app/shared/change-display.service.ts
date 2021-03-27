import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeDisplayService  {
  displayChanged = new Subject<boolean>();
  
  constructor() { }
  
  changeDisplay(state:boolean){
    this.displayChanged.next(state);
  }
}
