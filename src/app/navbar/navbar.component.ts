import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDisplayService } from '../shared/change-display.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayStatus:boolean = false;
  displaySub!:Subscription;
  constructor(private displayService:ChangeDisplayService) { }

  ngOnInit(): void {
    this.displaySub = this.displayService.displayChanged.subscribe((state)=>{
      this.displayStatus = state;
    })
  }
  changeDisplay(){
    this.displayService.changeDisplay(!this.displayStatus);
  }

}
