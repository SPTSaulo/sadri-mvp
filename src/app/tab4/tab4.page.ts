import { Component, inject } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PlanService } from '../services/plan.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {
  private readonly planService = inject(PlanService);
  private readonly userService = inject(UserService);

  public plans!: any[];
  public users!: any[];
  public randomPlan: any;
  public randomPerson: any;
  public isRandomModalOpen = false;
  public isToastOpen = false;
  public isActionSheetOpen = false;
  public selectedPlan!: any;

  constructor() {
    this.planService.getAll().subscribe((data) => (this.plans = data));
    this.userService.getAll().subscribe((data) => (this.users = data));
  }

  getRandomPlan() {
    const filterPlans = this.plans.filter((plan) => !plan.viewed);
    const randomIndex = Math.floor(Math.random() * filterPlans.length);
    this.randomPlan = filterPlans[randomIndex];
    this.isRandomModalOpen = true;
  }

  getRandomPerson() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    this.randomPerson = this.users[randomIndex];
  }
}
