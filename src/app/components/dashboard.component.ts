import { Component } from '@angular/core';
import { MainComponent } from './header-nav.component';
import { DashboardService } from '../services/dashboard.service';
import { UserService } from '../services/index';

@Component({
  selector: 'dashborad',
  templateUrl: './../partials/dashboard.component.html',
  providers: [DashboardService]
})
export class DashboardComponent {

  constructor(
    private dashboardService: DashboardService,
    private userService: UserService
  ) { }

  // lineChart
  
  values :Array<any> = [];
  dates :Array<any> = [];
  theHtmlString : String;

  getTimeData(): void {
    this.dashboardService
      .getTimeSeries()
      .then((timeSeriesData) => {
          console.log("ghhghgh",timeSeriesData);
          for (let i = 0; i < timeSeriesData.tags[0].results[0].values.length; i++) {
            this.values.push(timeSeriesData.tags[0].results[0].values[i][1]);
          
            var epochMonth = new Date(timeSeriesData.tags[0].results[0].values[i][0]).getUTCMonth()+1;
            var epochDate = new Date(timeSeriesData.tags[0].results[0].values[i][0]).getUTCDate() +"-"+
                epochMonth +"-"+ new Date(timeSeriesData.tags[0].results[0].values[i][0]).getUTCFullYear();
            this.dates.push(epochDate);

          } 
          console.log("Date --- ",this.dates);
          this.theHtmlString ='<canvas baseChart width="400" height="400" [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions" [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType"></canvas>'
      });
  }
  
  ngOnInit(values: Array<any>, dates: Array<any>): void {
    this.getTimeData();
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
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
}
