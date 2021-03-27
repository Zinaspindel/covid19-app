import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDisplayService } from 'src/app/shared/change-display.service';
import { cities } from './cities';
import { City } from './city.model';

@Component({
  selector: 'app-ramzor-plan',
  templateUrl: './ramzor-plan.component.html',
  styleUrls: ['./ramzor-plan.component.css']
})
export class RamzorPlanComponent implements OnInit {
  displayStatus:boolean = false;
  displaySub!:Subscription;
  cities:City[] =[];
  constructor(private displayService:ChangeDisplayService) { }

  ngOnInit(): void {
    this.cities = cities;
    this.displaySub = this.displayService.displayChanged.subscribe((state)=>{
      this.displayStatus = state;
    })
  }
  getColor(city:City){
    return city.color;
  }
  getDisplayStatus(){
    if(this.displayStatus)
      return "dark-mode";
    return "";
  }

}
