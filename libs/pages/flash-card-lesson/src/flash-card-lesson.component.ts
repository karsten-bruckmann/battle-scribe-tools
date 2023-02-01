import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  LearningModule,
  LearningService,
  Session,
} from '@battle-scribe-tools/core/learning';
import { TranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { IonicModule } from '@ionic/angular';
import { filter, map, Observable, shareReplay, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LearningModule,
    RouterModule,
    IonicModule,
    TranslatableComponent,
  ],
  templateUrl: './flash-card-lesson.component.html',
  styleUrls: ['./flash-card-lesson.component.scss'],
})
export class FlashCardLessonComponent {
  constructor(
    private learningService: LearningService,
    private activatedRoute: ActivatedRoute
  ) {}

  public session$ = this.initSession();

  public restart(): void {
    this.session$ = this.initSession();
  }

  private initSession(): Observable<Session> {
    return this.activatedRoute.paramMap.pipe(
      map((map) => map.get('lesson-index')),
      filter((index): index is string => null !== index),
      map((index) => parseInt(index)),
      switchMap((index) => this.learningService.getSession(index)),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }
}
