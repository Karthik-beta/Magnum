import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
// import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formData = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    // Send a POST request to your Django backend for authentication
    const apiUrl = 'http://localhost:8000/api/login/';

    const observer: Observer<any> = {
      next: (response) => {
        // Handle successful login, e.g., redirect to a different page
        console.log('Login successful', response);
        // Redirect to the desired URL
        this.router.navigate(['/alert']);
      },
      error: (error) => {
        // Handle login error, display an error message to the user
        console.error('Login error', error);
      },
      complete: () => {
        // Optional: Handle any cleanup or completion logic
      }
    };

    this.http.post(apiUrl, this.formData).subscribe(observer);
  }

}
