import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthenticated$: any = false;
  constructor(private auth0Service: AuthService, private router: Router) {
    this.auth0Service.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated$ = isAuth;
      this.auth0Service.getUser().subscribe((user: any) => {
        localStorage.setItem('userId', user?.sub)
      })
    });
  }

  loginWithRedirect() {
    this.auth0Service.loginWithRedirect();
  }

  logout() {
    this.auth0Service.logout();
  }
}
