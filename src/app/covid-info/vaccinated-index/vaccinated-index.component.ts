import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDisplayService } from 'src/app/shared/change-display.service';

@Component({
  selector: 'app-vaccinated-index',
  templateUrl: './vaccinated-index.component.html',
  styleUrls: ['./vaccinated-index.component.css']
})
export class VaccinatedIndexComponent implements OnInit {
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
  getDarkMode(){
    console.log("heu");
    if(this.displayStatus){
      console.log("ff");
      return "dark-mode-changes"
    }
    return ""
  }
}
