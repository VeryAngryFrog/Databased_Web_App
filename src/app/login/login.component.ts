import { Component } from '@angular/core';
import { AuthService} from '../../core/services/auth.service'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';


@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ResetPasswordComponent],
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