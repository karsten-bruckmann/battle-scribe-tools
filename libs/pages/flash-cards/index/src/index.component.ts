import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LearningModule,
  LearningService,
} from '@battle-scribe-tools/core/learning';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [CommonModule, LearningModule, IonicModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  constructor(private learningService: LearningService) {}

  public lessons$ = this.learningService.lessons$;
}
