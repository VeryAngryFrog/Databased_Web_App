import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from "./registration/registration.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoginComponent, NavbarComponent, RegistrationComponent, ResetPasswordComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Databased_Web_App';
}
