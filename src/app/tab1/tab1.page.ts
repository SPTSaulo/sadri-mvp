import { Component, inject } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  private readonly filmService = inject(FilmService);
  private readonly actionSheetController = inject(ActionSheetController);

  public films!: any[];
  public randomFilm: any;
  public isRandomModalOpen = false;
  public isToastOpen = false;
  public isActionSheetOpen = false;
  public selectedFilm!: any;

  constructor() {
    this.filmService.getAll().subscribe((data) => (this.films = data));
  }

  getRandomFilm() {
    const filterFilms = this.films.filter((film) => !film.viewed);
    const randomIndex = Math.floor(Math.random() * filterFilms.length);
    this.randomFilm = filterFilms[randomIndex];
    this.isRandomModalOpen = true;
  }

  markFilmAsViewed() {
    this.randomFilm.viewed = true;
    this.filmService.update(this.randomFilm);
    this.isRandomModalOpen = false;
    this.isToastOpen = true;
  }

  async presentActionSheet(film: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [
        {
          text: film.viewed ? 'Marcar como no vista' : 'Marcar como vista',
          data: {
            action: 'share',
          },
          handler: () =>
            this.filmService.update({ ...film, viewed: !film.viewed }),
        },
        {
          text: 'Borrar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => this.filmService.delete(film.id),
        },
        {
          text: 'Cancelar',
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
