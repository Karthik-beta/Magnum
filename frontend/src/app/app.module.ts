import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SkeletonModule } from 'primeng/skeleton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { AuthGuard } from './auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ReportComponent } from './report/report.component';
import { MonthreportComponent } from './monthreport/monthreport.component';
import { LoginComponent } from './login/login.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { AddEditEmpComponent } from './employeemaster/add-edit-emp/add-edit-emp.component';
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
import { AddEditAndoncallhelpComponent } from './andoncallhelp/add-edit-andoncallhelp/add-edit-andoncallhelp.component';
import { AlertreportComponent } from './alertreport/alertreport.component';
import { BreakdowncategoryComponent } from './breakdowncategory/breakdowncategory.component';
import { AddEditBreakdownComponent } from './breakdowncategory/add-edit-breakdown/add-edit-breakdown.component';
import { ShiftComponent } from './shift/shift.component';
import { AddEditShiftComponent } from './shift/add-edit-shift/add-edit-shift.component';
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
import { AlertresettingComponent } from './alertresetting/alertresetting.component';
import { AlertengineeringComponent } from './alertengineering/alertengineering.component';
import { AlertelectComponent } from './alertelect/alertelect.component';
import { AlertqualityComponent } from './alertquality/alertquality.component';
import { AlertmechComponent } from './alertmech/alertmech.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    ReportComponent,
    MonthreportComponent,
    LoginComponent,
    EmployeemasterComponent,
    AddEditEmpComponent,
    ShiftmanagementComponent,
    AddshiftmanagementComponent,
    ShiftstrengthComponent,
    ShiftskillComponent,
    MaterialtransactionComponent,
    ConfigurationComponent,
    AndonbreakdownComponent,
    ShopfloorwiseComponent,
    CategorywiseComponent,
    AndoncallhelpComponent,
    AddEditAndoncallhelpComponent,
    AlertreportComponent,
    BreakdowncategoryComponent,
    AddEditBreakdownComponent,
    ShiftComponent,
    AddEditShiftComponent,
    SubbreakdowncategoryComponent,
    SubAssemblylineComponent,
    CompanyComponent,
    LocationComponent,
    ShopfloorComponent,
    AssemblylineComponent,
    MachineComponent,
    AssemblylineanalysisComponent,
    MachinewiseanalysisComponent,
    AlertComponent,
    AlertresettingComponent,
    AlertengineeringComponent,
    AlertelectComponent,
    AlertqualityComponent,
    AlertmechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    PaginatorModule,
    MenuModule,
    ConfirmDialogModule,
    ToastModule,
    NgApexchartsModule,
    SkeletonModule,
    AutoCompleteModule,
    DropdownModule,
    CalendarModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    SharedService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
