import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { GeneralInfoComponent } from './covid-info/general-info/general-info.component';
import { VaccinatedIndexComponent } from './covid-info/vaccinated-index/vaccinated-index.component';
import { VaccinatedByAgeCityComponent } from './covid-info/vaccinated-by-age-city/vaccinated-by-age-city.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CovidInfoComponent,
    GeneralInfoComponent,
    VaccinatedIndexComponent,
    VaccinatedByAgeCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
