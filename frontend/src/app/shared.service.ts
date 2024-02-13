import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // private baseUrl = 'http://163.157.19.175:8000';
  private baseUrl = 'http://192.168.9.100:8000';




  private isLoginPageSubject = new BehaviorSubject<boolean>(false);
  isLoginPage$ = this.isLoginPageSubject.asObservable();

  setIsLoginPage(value: boolean): void {
    this.isLoginPageSubject.next(value);
  }


  constructor(private http:HttpClient) { }

  getEmployeeLogs(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.baseUrl}/attendance_record/`, { params: httpParams });
  }

  getEmployeeDetails(param:any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, param[key]);
      }
    }

    return this.http.get(`${this.baseUrl}/employeecrud/`, { params: httpParams });
  }

  getCombinedAutocompleteSuggestions(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/autocomplete/?term=${searchTerm}`);
  }

  getAttendanceStatistics():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'/AttendanceStatistics/');
  }

  getemployee_presence():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'/AttendanceStatisticsMonth/');
  }

  getEmployeeList(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.baseUrl}/employee/`, { params: httpParams });
  }

  getEmployeeDetailsById(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee/${employeeId}/`);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/employee/`, employee);
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/employee/${employee.employee_id}/`, employee);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employee/${employeeId}/`);
  }


  downloadEmployeeData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/download_employee_data/`, {
      responseType: 'blob' as 'json', // Set the response type to 'blob' for binary data
    });
  }

  downloadAttendanceData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/download_attendance_data/`, {
      responseType: 'blob' as 'json', // Set the response type to 'blob' for binary data
    });
  }

  getBreakdowncategoryList():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/breakdown_category/`);
  }

  addBreakdowncategory(val:any){
    return this.http.post(`${this.baseUrl}/breakdown_category/`,val);
  }

  updateBreakdowncategory(val:any){
    return this.http.put(`${this.baseUrl}/breakdown_category/${val.breakdownCategoryId}`,val)
  }

  deleteBreakdowncategory(breakdownCategoryId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/breakdown_category/${breakdownCategoryId}`)
  }

  getShiftList():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/shift/`);
  }

  getCompanyList():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/company/`);
  }

  getLocationList():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/location/`);
  }

  getShopfloorList():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/shopfloor/`);
  }

  getAssemblylineList():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/assemblyline/`);
  }

  getMachineList():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/machine/`);
  }

  getAllAndonNames():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/andon/`);
  }

  // getAndList():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.baseUrl}/andon/`);
  // }

  // getAndList(params: any): Observable<any> {
  //   let httpParams = new HttpParams();

  //   for (const key in params) {
  //     if (params.hasOwnProperty(key)) {
  //       httpParams = httpParams.append(key, params[key]);
  //     }
  //   }
  //   return this.http.get(`${this.baseUrl}/andon/`, { params: httpParams });
  // }


  getAndList(params: any): Observable<any> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get(`${this.baseUrl}/andon/`, { params: httpParams });
  }


  addAnd(val:any){
    return this.http.post(`${this.baseUrl}/andon/`,val);
  }

  updateAnd(val:any){
    return this.http.put(`${this.baseUrl}/andon/`,val);
  }

  deleteAnd(id: number){
    return this.http.delete(`${this.baseUrl}/andon/`+id);
  }

  downloadAndonData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/export/`, {
      responseType: 'blob' as 'json', // Set the response type to 'blob' for binary data
    });
  }

  getMetricsData():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/metrics/`);
  }

  getShopfloorwiseData():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/shopfloorwise/`);
  }

  getDatabaseStatus():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/check_database_connection/`);
  }

  getAndonOpenAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/andon_open/`);
  }

  getAndonOpenResettingAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/andon_open_resetting/`);
  }

  getAndonOpenEngineeringAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/andon_open_engineering/`);
  }

  getAndonOpenElectricalAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/andon_open_electrical/`);
  }

  getAndonOpenQualityAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/andon_open_quality/`);
  }

  getAndonOpenMechAlerts():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/andon_open_mech/`);
  }

}
