import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import {
  AvatarImagesService,
  AvatarImagesServiceFactory,
} from '@battle-scribe-tools/data-access/avatar-images';
import { IonicModule } from '@ionic/angular';
import {
  BehaviorSubject,
  NEVER,
  Observable,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'bst-avatar',
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [
    {
      provide: AvatarImagesService,
      useFactory: (factory: AvatarImagesServiceFactory) =>
        factory.create('avatars'),
      deps: [AvatarImagesServiceFactory],
    },
  ],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  constructor(private imagesService: AvatarImagesService) {}

  @Input() editable = false;
  @Input() public set name(name: string) {
    this.name$.next(name);
  }

  @Output() avatarLoaded = new Subject<void>();

  public name$ = new BehaviorSubject<string | null>(null);
  public data$: Observable<string | null> = this.name$.pipe(
    switchMap((name) => (name ? this.imagesService.getImage$(name) : NEVER)),
    tap((image) => {
      if (!image) {
        this.avatarLoaded.next();
      }
    })
  );

  public async save(event: Event): Promise<void> {
    const name = this.name$.value;
    if (!name) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const file = (event as any).target.files[0];
    this.imagesService.setImage(name, file);
  }

  public delete(): void {
    const name = this.name$.value;
    if (!name) {
      return;
    }
    if (!this.name$.value) {
      return;
    }
    this.imagesService.deleteImage(name);
  }
}
