import { Component } from '@angular/core';
import { AuthService} from '../../core/services/auth.service'

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  /*
  this.authService.login({ email, password }).subscribe({
    next: (res: any) => {
      this.authService.setSession(res.token, res.role);
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error('Login fehlgeschlagen', err);
    }
  });
  {
    "token": "eyJhbGciOiJIUzI1...",
    "role": "Admin"
  }
  */
}