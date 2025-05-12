import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get isAdmin(): boolean {
    return this.authService.getUserRole() === 'Admin';
  }

  get isLeader(): boolean {
    return this.authService.getUserRole() === 'Abteilungsleiter';
  }

  logout(): void {
    this.authService.logout();
  }
}
