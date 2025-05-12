import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< Updated upstream
import {NavbarComponent} from "./navbar/navbar.component";


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
=======
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoginComponent],
>>>>>>> Stashed changes
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Databased_Web_App';
}
