import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response && response.token) {
        localStorage.setItem('authToken', response.token); // Save token in local storage
        this.router.navigate(['/sloves']); // Redirect to slove list or other page
      } else {
        console.error('Login failed');
      }
    });
  }
}
