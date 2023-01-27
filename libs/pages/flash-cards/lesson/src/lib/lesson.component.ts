import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  LearningModule,
  LearningService,
} from '@battle-scribe-tools/core/learning';
import { IonicModule } from '@ionic/angular';
import { filter, map, shareReplay, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, LearningModule, RouterModule, IonicModule],
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent {
  constructor(
    private learningService: LearningService,
    private activatedRoute: ActivatedRoute
  ) {}

  public session$ = this.activatedRoute.paramMap.pipe(
    map((map) => map.get('index')),
    filter((index): index is string => null !== index),
    map((index) => parseInt(index)),
    switchMap((index) => this.learningService.getSession(index)),
    shareReplay({ refCount: true, bufferSize: 1 })
  );
}
