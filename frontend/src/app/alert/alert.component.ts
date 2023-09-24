import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private service: SharedService) { }


  today_open_alerts: number = 0;
  total_open_alerts: number = 0;
  total_acknowledge_alerts: number = 0;
  total_resetting_alerts: number = 0;
  total_engineering_alerts: number = 0;
  total_quality_alerts: number = 0;
  total_mech_maint_alerts: number = 0;
  total_elect_maint_alerts: number = 0;
  total_alerts: number = 0;


  databaseStatus: string = '';
  databaseSubscription: Subscription | undefined;



  ngOnInit(): void {
    // this.metricsData();
    this.checkDatabaseConnection();
  }



  metricsData() {
    this.service.getMetricsData().subscribe((data: any) => {
      // this.results = data;
      this.today_open_alerts = data.today_open_alerts;
      this.total_open_alerts = data.total_open_alerts;
      this.total_acknowledge_alerts = data.total_acknowledge_alerts;
      this.total_resetting_alerts = data.total_resetting_alerts;
      this.total_engineering_alerts = data.total_engineering_alerts;
      this.total_quality_alerts = data.total_quality_alerts;
      this.total_mech_maint_alerts = data.total_mech_maint_alerts;
      this.total_elect_maint_alerts = data.total_elect_maint_alerts;
      this.total_alerts = data.total_alerts;
    });
  }

  checkDatabaseConnection() {
    this.databaseSubscription = this.service.getDatabaseStatus().subscribe({
      next: (response: any) => {
        // Set the database status message based on the response
        this.databaseStatus = response.message;
      },
      error: (error: any) => {
        // Set an error message if the database connection check fails
        this.databaseStatus = 'Database connection error: ' + error.error.message;
      }
    });
  }

  // checkDatabaseConnection() {
  //   this.service.getDatabaseStatus().subscribe((data: any) => {
  //     this.databaseStatus = data.message;
  //   }
  //   );
  // }

  ngOnDestroy() {
    // Unsubscribe from the observable to prevent memory leaks
    if (this.databaseSubscription) {
      this.databaseSubscription.unsubscribe();
    }
  }

}
