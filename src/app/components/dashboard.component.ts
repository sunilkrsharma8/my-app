import { Component } from '@angular/core';
import { MainComponent } from './header-nav.component';

@Component({
  selector: 'dashborad',
  templateUrl: './../partials/dashboard.component.html'
})
export class DashboardComponent {
  // lineChart
  
  values :Array<any> = [];
  dates :Array<any> = [];
  private responseFromServer  =  {
   "start":null,
   "end":null,
   "tags":[
      {
         "name":"CKP-C3B-W0073",
         "results":[
            {
               "groups":[
                  {
                     "name":"type",
                     "type":"number"
                  }
               ],
               "attributes":{
                  "address":[
                     "modbus-//172.20.10.2-1025/1/2"
                  ],
                  "datatype":[
                     "SHORT"
                  ],
                  "category":[
                     "REAL"
                  ]
               },
               "values":[
                  [
                     1501656435000 ,
                     100,
                     3
                  ],
                  [
                     1500892126909,
                     200,
                     3
                  ],
                  [
                     1500892126909,
                     300,
                     3
                  ],
                  [
                     1501656435000,
                     300,
                     3
                  ],
                  [
                     1500892126996,
                     100,
                     3
                  ],
                  [
                     1500892127015,
                     200,
                     3
                  ],
                  [
                     1500892127026,
                     150,
                     3
                  ],
                  [
                     1500892127046,
                     350,
                     3
                  ],
                  [
                     1500892127059,
                     500,
                     3
                  ],
                  [
                     1500892127079,
                     490,
                     3
                  ],
                  [
                     1500892127085,
                     390,
                     3
                  ],
                  [
                     1500892127109,
                     200,
                     3
                  ],
                  [
                     1500892127119,
                     320,
                     3
                  ],
                  [
                     1500892127129,
                     230,
                     3
                  ],
                  [
                     1500892127140,
                     130,
                     3
                  ],
                  [
                     1500892127150,
                     300,
                     3
                  ],
                  [
                     1500892127159,
                     400,
                     3
                  ],
                  [
                     1500892127169,
                     380,
                     3
                  ],
                  [
                     1500892127194,
                     430,
                     3
                  ],
                  [
                     1500892127206,
                     500,
                     3
                  ],
                  [
                     1500892127216,
                     300,
                     3
                  ],
                  [
                     1500892127225,
                     300,
                     3
                  ],
                  [
                     1500892127259,
                     100,
                     3
                  ],
                  [
                     1500892127275,
                     560,
                     3
                  ],
                  [
                     1500892127286,
                     300,
                     3
                  ],
                  [
                     1500892127297,
                     300,
                     3
                  ],
                  [
                     1500892127306,
                     300,
                     3
                  ],
                  [
                     1500892127314,
                     300,
                     3
                  ],
                  [
                     1500892127323,
                     300,
                     3
                  ],
                  [
                     1500892127332,
                     300,
                     3
                  ],
                  [
                     1500892127341,
                     300,
                     3
                  ],
                  [
                     1500892127362,
                     300,
                     3
                  ],
                  [
                     1500892127384,
                     300,
                     3
                  ],
                  [
                     1500892127390,
                     300,
                     3
                  ],
                  [
                     1500892127406,
                     300,
                     3
                  ],
                  [
                     1500892127418,
                     300,
                     3
                  ],
                  [
                     1500892127428,
                     300,
                     3
                  ],
                  [
                     1500892127458,
                     300,
                     3
                  ],
                  [
                     1500892127469,
                     300,
                     3
                  ],
                  [
                     1500892127482,
                     300,
                     3
                  ],
                  [
                     1501652778000,
                     300,
                     3
                  ]
               ]
            }
         ],
         "stats":{
            "rawCount":41
         }
      }
   ]
}

  ngOnInit(values: Array<any>, dates: Array<any>): void {
    for (let i = 0; i < this.responseFromServer.tags[0].results[0].values.length; i++) {
      this.values.push(this.responseFromServer.tags[0].results[0].values[i][1]);
      
      var epochMonth = new Date(this.responseFromServer.tags[0].results[0].values[i][0]).getUTCMonth()+1;
      var epochDate = new Date(this.responseFromServer.tags[0].results[0].values[i][0]).getUTCDate() +"-"+
          epochMonth +"-"+ new Date(this.responseFromServer.tags[0].results[0].values[i][0]).getUTCFullYear();
      this.dates.push(epochDate);

    } 
    console.log("Date --- ",this.dates);
  }

  public lineChartData:Array<any> =  [
    {data: this.values, label: 'Series A'}
  ];

  public lineChartLabels:Array<any> = this.dates;

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  /* public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  } */
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
