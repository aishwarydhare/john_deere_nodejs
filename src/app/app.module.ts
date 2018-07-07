import { ConfigurationEditComponent } from './configuration/configuration-edit.component';
import { ConfigurationViewComponent } from './configuration/configuration-view.component';
import { ConfigurationFormComponent } from './configuration/configuration-form.component';
import { HomeDetailComponent } from './home/home-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SensorHealthComponent } from './sensor-health/sensor-health.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SensorNetworkComponent } from './sensor-network/sensor-network.component';
import { ReportComponent } from './report/report.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FooterComponent } from './footer/footer.component';
import { SensorDataFormComponent } from './sensor-data-form/sensor-data-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotificationsComponent,
    SensorHealthComponent,
    NotFoundComponent,
    SensorNetworkComponent,
    ReportComponent,
    ConfigurationComponent,
    FooterComponent,
    HomeDetailComponent,
    ConfigurationFormComponent,
    SensorDataFormComponent,
    ConfigurationViewComponent,
    ConfigurationEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
     
      {
        path: 'home', 
        component:HomeComponent
      },
      {
        path: 'homeDetail', 
        component:HomeDetailComponent
      },
      {
        path: 'notifications', 
        component:NotificationsComponent
      },
      
      {
        path: 'SensorHealth', 
        component:SensorHealthComponent
      },
      
      {
        path: 'configuration', 
        component:ConfigurationComponent
      },
      {
        path: 'configurationForm', 
        component:ConfigurationFormComponent
      },
      {
        path: 'configurationEdit', 
        component:ConfigurationEditComponent
      },
      {
        path: 'configurationView', 
        component:ConfigurationViewComponent
      },
      {
        path: 'SensorNetwork', 
        component:SensorNetworkComponent
      },
      {
        path: 'report', 
        component:ReportComponent
      },
      {
        path: '**', 
        component:NotFoundComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
