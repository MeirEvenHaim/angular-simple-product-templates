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
    this.authService.login(this.username, this.password).subscribe({
      next: response => {
        if (response && response.access) {
          localStorage.setItem('authToken', response.access); // Save token in local storage
          this.router.navigate(['/sloves']);
        } else {
          console.error('Login failed');
        }
      },
      error: err => {
        console.error('Login error:', err);
      }
    });
  }
}
