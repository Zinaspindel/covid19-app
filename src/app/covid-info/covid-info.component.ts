import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChangeDisplayService } from '../shared/change-display.service';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.css']
})
export class CovidInfoComponent implements OnInit {
  displayStatus:boolean = false;
  displaySub!:Subscription;
  constructor(private displayService:ChangeDisplayService) { }

  ngOnInit(): void {
    this.displaySub = this.displayService.displayChanged.subscribe((state)=>{
      this.displayStatus = state;
    })
  }
  getDisplayStatus(){
    if(this.displayStatus)
      return "dark-mode";
    return "";
  }

}
