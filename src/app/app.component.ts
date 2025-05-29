import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent} from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from "./registration/registration.component";
import { ResetPasswordComponent} from "./reset-password/reset-password.component";
import { NewsComponent } from './news/news.component';
import { TermineComponent } from './termine/termine.component';
import { ForumComponent } from './forum/forum.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoginComponent, NavbarComponent, RegistrationComponent, NewsComponent, TermineComponent, ForumComponent, ResetPasswordComponent, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Databased_Web_App';
}
