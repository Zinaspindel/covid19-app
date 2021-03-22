import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinated-by-age-city',
  templateUrl: './vaccinated-by-age-city.component.html',
  styleUrls: ['./vaccinated-by-age-city.component.css']
})
export class VaccinatedByAgeCityComponent implements OnInit {
  cities = []
  constructor() { }

  ngOnInit(): void {
  }

}
