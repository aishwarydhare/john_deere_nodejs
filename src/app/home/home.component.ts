import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }


  ngOnInit() {

    this.barchart();
    this.linechart();

  }

  linechart() {
    var data =
      [
        {
          x: ['25-Jun-2018 2:00', '25-Jun-2018 2:05', '25-Jun-2018 2:10', '25-Jun-2018 2:15'],
          y: [3, 10, 13, 9],

          mode: 'line',

          marker: {
            color: 'green',
            line: {
              color: 'green',
              width: 4
            }
          }

        }
      ];

    var layout = {
      xaxis: { title: 'time', tickangle : 20},
      yaxis: { title: 'ph', range: [1, 14] },
    };



    Plotly.newPlot('chart', data, layout, { displayModeBar: false });

  }

  barchart() {
    var data =
      [
        {
          x: ['25-Jun-2018 2:00', '25-Jun-2018 2:05', '25-Jun-2018 2:10', '25-Jun-2018 2:15'],
          y: [3, 10, 13, 9],
          text: [3, 10, 13, 9],
          type: 'bar',
          textposition: 'outside',
          hoverinfo: 'none',
          marker: {
            color: 'green'
          }

        }
      ];

    var layout = {
      xaxis: { title: 'time',tickangle : 20 },
      yaxis: { title: 'ph', range: [1, 14] },
    };



    Plotly.newPlot('myDiv', data, layout, { displayModeBar: false });
  }
}
