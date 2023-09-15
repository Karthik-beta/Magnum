import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(public service:SharedService) { }

  LocationList:any=[];

  ngOnInit(): void {
    this.refreshLocationList();
  }

  refreshLocationList(){
    this.service.getLocationList().subscribe(data=>{
      this.LocationList=data;
    });
  }

}
