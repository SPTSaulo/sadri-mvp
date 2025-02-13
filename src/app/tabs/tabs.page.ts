import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  private readonly userService = inject(UserService);
  public users!: any[];
  public currentUser!: any;
  public preventUser!: any;

  constructor() {
    this.userService.getAll().subscribe((data) => {
      this.users = data;
      this.preventUser = this.users[0];
    });
    this.currentUser = this.userService.currentUser.getValue();
  }

  updateCurrentUser() {
    this.currentUser = this.preventUser;
    this.userService.currentUser.next(this.currentUser);
  }

  changeUserSelection(event: any) {
    this.preventUser = this.users.find(
      (user) => user.id === event.detail.value
    );
  }
}
