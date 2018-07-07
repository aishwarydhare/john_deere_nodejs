import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-data-form',
  templateUrl: './sensor-data-form.component.html',
  styleUrls: ['./sensor-data-form.component.css']
})
export class SensorDataFormComponent implements OnInit {
private  SensorDataService:any;
  name:String='';
  sensorType:String='';
  measurementUnit:String='';
  standardMinValue:number;
  standardMaxValue:number;
  graphType:String='';
  scaleMinimum:number;
  scaleMaximum:number;
  sensorMake:String='';
  sensorModel:String='';
  latitude:number;
  longitude:number;
  loRaGatewayID:number;
  sensingTitle:String='';
  sensingLocationName:String='';
  sensingDescription:String='';
  constructor() { }

  ngOnInit() {
  }
 onSave()
 {
  //  this.SensorDataService.save(this.name).subscribe((response)=>
  //  {
  //   const result=response.json();
  //  });
  console.log(this);
 
 }
}
