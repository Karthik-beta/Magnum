import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { MonthreportComponent } from './monthreport/monthreport.component';
import { LoginComponent } from './login/login.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { ShiftmanagementComponent } from './shiftmanagement/shiftmanagement.component';
import { AddshiftmanagementComponent } from './shiftmanagement/addshiftmanagement/addshiftmanagement.component';
import { ShiftstrengthComponent } from './shiftstrength/shiftstrength.component';
import { ShiftskillComponent } from './shiftskill/shiftskill.component';
import { MaterialtransactionComponent } from './materialtransaction/materialtransaction.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AndonbreakdownComponent } from './andonbreakdown/andonbreakdown.component';
import { ShopfloorwiseComponent } from './shopfloorwise/shopfloorwise.component';
import { CategorywiseComponent } from './categorywise/categorywise.component';
import { AndoncallhelpComponent } from './andoncallhelp/andoncallhelp.component';
import { AlertreportComponent } from './alertreport/alertreport.component';
import { BreakdowncategoryComponent } from './breakdowncategory/breakdowncategory.component';
import { ShiftComponent } from './shift/shift.component';
import { SubbreakdowncategoryComponent } from './subbreakdowncategory/subbreakdowncategory.component';
import { SubAssemblylineComponent } from './sub-assemblyline/sub-assemblyline.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { ShopfloorComponent } from './shopfloor/shopfloor.component';
import { AssemblylineComponent } from './assemblyline/assemblyline.component';
import { MachineComponent } from './machine/machine.component';
import { AssemblylineanalysisComponent } from './assemblylineanalysis/assemblylineanalysis.component';
import { MachinewiseanalysisComponent } from './machinewiseanalysis/machinewiseanalysis.component';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard } from './auth.guard';
import { AlertresettingComponent } from './alertresetting/alertresetting.component';
import { AlertengineeringComponent } from './alertengineering/alertengineering.component';
import { AlertelectComponent } from './alertelect/alertelect.component';
import { AlertqualityComponent } from './alertquality/alertquality.component';
import { AlertmechComponent } from './alertmech/alertmech.component';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'report', component:ReportComponent},
  {path: 'monthly', component:MonthreportComponent},
  {path: 'login', component:LoginComponent},
  {path: 'employee', component:EmployeemasterComponent},
  {path: 'Shift_Management', component:ShiftmanagementComponent},
  {path: 'Shift_Management/Add_Edit', component:AddshiftmanagementComponent},
  {path: 'Shift_Strength', component:ShiftstrengthComponent},
  {path: 'Shift_Skill', component:ShiftskillComponent},
  {path: 'material', component:MaterialtransactionComponent},
  {path: 'conf', component:ConfigurationComponent},
  {path: 'andonb', component:AndonbreakdownComponent},
  {path: 'shopfloorwise', component:ShopfloorwiseComponent},
  {path: 'categorywise', component:CategorywiseComponent},
  {path: 'andonhelp', component:AndoncallhelpComponent},
  {path: 'alertreport', component:AlertreportComponent},
  {path: 'breakdown_category', component:BreakdowncategoryComponent},
  {path: 'shift', component:ShiftComponent},
  {path: 'sub_breakdown_category', component:SubbreakdowncategoryComponent},
  {path: 'sub_assemblyline', component:SubAssemblylineComponent},
  {path: 'company', component:CompanyComponent},
  {path: 'location', component:LocationComponent},
  {path: 'shopfloor', component:ShopfloorComponent},
  {path: 'assembly_line', component:AssemblylineComponent},
  {path: 'machine', component:MachineComponent},
  {path: 'assembly_analysis', component:AssemblylineanalysisComponent},
  {path: 'machinewise_analysis', component:MachinewiseanalysisComponent},
  {path: 'alert', component:AlertComponent},
  {path: 'alert_resetting', component:AlertresettingComponent},
  {path: 'alert_engineering', component:AlertengineeringComponent},
  {path: 'alert_elect', component:AlertelectComponent},
  {path: 'alert_quality', component:AlertqualityComponent},
  {path: 'alert_mech', component:AlertmechComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
