import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDisplayService } from 'src/app/shared/change-display.service';
import { cities } from './cities';
import { City } from './city.model';

@Component({
  selector: 'app-vaccinated-by-age-city',
  templateUrl: './vaccinated-by-age-city.component.html',
  styleUrls: ['./vaccinated-by-age-city.component.css']
})
export class VaccinatedByAgeCityComponent implements OnInit {
  cities:City[] = [];
  displayStatus:boolean = false;
  displaySub!:Subscription;
  constructor(private displayService:ChangeDisplayService) { }

  ngOnInit(): void {
    this.cities = cities;
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
