import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChangeDisplayService } from 'src/app/shared/change-display.service';

@Component({
  selector: 'app-daily-recovers-and-deaths',
  templateUrl: './daily-recovers-and-deaths.component.html',
  styleUrls: ['./daily-recovers-and-deaths.component.css']
})
export class DailyRecoversAndDeathsComponent implements OnInit {
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
