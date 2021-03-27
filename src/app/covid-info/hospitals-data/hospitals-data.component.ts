import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDisplayService } from 'src/app/shared/change-display.service';
import { Hospital } from './hospital.model';
import { hospitals } from './hospitals';

@Component({
  selector: 'app-hospitals-data',
  templateUrl: './hospitals-data.component.html',
  styleUrls: ['./hospitals-data.component.css']
})
export class HospitalsDataComponent implements OnInit {
  hospitals:Hospital[] = [];
  displayStatus:boolean = false;
  displaySub!:Subscription;
  constructor(private displayService:ChangeDisplayService) { }

  ngOnInit(): void {
    this.hospitals = hospitals;
    this.displaySub = this.displayService.displayChanged.subscribe((state)=>{
      this.displayStatus = state;
    })
  }
  getDisplayStatus(){
    if(this.displayStatus)
      return "dark-mode";
    return "";
  }
  getOccupationGenData(hospital:Hospital){
    return hospital.occupationGeneral ? true : false;
  }
  getOccupationCovData(hospital:Hospital){
    return hospital.occupationCovid ? true : false;
  }
}
