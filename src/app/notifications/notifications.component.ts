import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  items:Object;
  constructor() {
    this.items=[{sensorID:1,sensorName:"ph",alertDetails:"hello world",timeStamp:"12:00 AM,",currentValue:8},{sensorID:1,sensorName:"ph",alertDetails:"hello world",timeStamp:"12:00 AM,",currentValue:8},{sensorID:1,sensorName:"ph",alertDetails:"hello world",timeStamp:"12:00 AM,",currentValue:8},{sensorID:1,sensorName:"ph",alertDetails:"hello world",timeStamp:"12:00 AM,",currentValue:8},{sensorID:1,sensorName:"ph",alertDetails:"hello world",timeStamp:"12:00 AM,",currentValue:8},{sensorID:1,sensorName:"ph",alertDetails:"hello world",timeStamp:"12:00 AM,",currentValue:8},{sensorID:1,sensorName:"ph",alertDetails:"hello world",timeStamp:"12:00 AM,",currentValue:8}]
    }

  ngOnInit() {
  }

}
