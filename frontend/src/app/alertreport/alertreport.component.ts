import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-alertreport',
  templateUrl: './alertreport.component.html',
  styleUrls: ['./alertreport.component.css']
})
export class AlertreportComponent implements OnInit {

  constructor(
    private service: SharedService
  ) { }

  andonList: any[] = [];

  ngOnInit(): void {
    this.refreshAndList();
  }


  refreshAndList() {
    this.service.getAndList().subscribe(data => {
      this.andonList = data;
    });
  }

}
