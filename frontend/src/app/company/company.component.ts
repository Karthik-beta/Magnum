import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(public service:SharedService) { }

  CompanyList:any=[];

  ngOnInit(): void {
    this.refreshCompanyList();
  }

  refreshCompanyList(){
    this.service.getCompanyList().subscribe(data=>{
      this.CompanyList=data;
    }
    );
  }
}
