import { Component, inject } from '@angular/core';
import { Auth, signInAnonymously } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public userLogged: boolean = false;
  private authService = inject(Auth);

  constructor() {
    signInAnonymously(this.authService)
      .then(() => (this.userLogged = true))
      .catch(() => (this.userLogged = false));
  }
}
