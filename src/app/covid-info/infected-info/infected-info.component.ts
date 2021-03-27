import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDisplayService } from 'src/app/shared/change-display.service';

@Component({
  selector: 'app-infected-info',
  templateUrl: './infected-info.component.html',
  styleUrls: ['./infected-info.component.css']
})
export class InfectedInfoComponent implements OnInit {
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
