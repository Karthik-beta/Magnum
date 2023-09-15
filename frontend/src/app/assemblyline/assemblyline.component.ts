import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css']
})
export class AssemblylineComponent implements OnInit {

  constructor(public service:SharedService) { }

  AssemblylineList:any=[];

  ngOnInit(): void {
    this.refreshAssemblylineList();
  }

  refreshAssemblylineList(){
    this.service.getAssemblylineList().subscribe(data=>{
      this.AssemblylineList=data;
    });
  }

}
