import { Component, inject } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  private readonly serieService = inject(SerieService);
  private readonly actionSheetController = inject(ActionSheetController);

  public series!: any[];
  public randomSerie: any;
  public isRandomModalOpen = false;
  public isToastOpen = false;
  public isActionSheetOpen = false;
  public selectedSerie!: any;

  constructor() {
    this.serieService.getAll().subscribe((data) => (this.series = data));
  }

  getRandomSerie() {
    const filterSeries = this.series.filter((serie) => !serie.viewed);
    const randomIndex = Math.floor(Math.random() * filterSeries.length);
    this.randomSerie = filterSeries[randomIndex];
    this.isRandomModalOpen = true;
  }

  markSerieAsViewed() {
    this.randomSerie.viewed = true;
    this.serieService.update(this.randomSerie);
    this.isToastOpen = true;
    this.isRandomModalOpen = false;
  }

  async presentActionSheet(serie: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [
        {
          text: serie.viewed ? 'Marcar como no vista' : 'Marcar como vista',
          data: {
            action: 'share',
          },
          handler: () =>
            this.serieService.update({ ...serie, viewed: !serie.viewed }),
        },
        {
          text: 'Borrar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => this.serieService.delete(serie.id),
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
