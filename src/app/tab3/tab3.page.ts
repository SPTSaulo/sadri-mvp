import { Component, inject } from '@angular/core';
import { AwardService } from '../services/award.service';
import { UserService } from '../services/user.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  private readonly awardService = inject(AwardService);
  private readonly userService = inject(UserService);
  private readonly actionSheetController = inject(ActionSheetController);

  public awards!: any[];
  public user!: any;
  public isToastOpen = false;

  constructor() {
    this.awardService.getAll().subscribe((data) => (this.awards = data));
    this.userService.currentUser.subscribe((user) => {
      this.userService.get(user.id).subscribe((data) => (this.user = data));
    });
  }

  updateUser() {
    this.userService.update(this.user);
  }

  async presentActionSheet(award: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [
        {
          text: 'Canjear',
          data: {
            action: 'share',
          },
          handler: () =>
            this.userService.update({
              ...this.user,
              coins: this.user.coins - award.coins,
            }),
        },
        {
          text: 'Borrar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => this.awardService.delete(award.id),
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
