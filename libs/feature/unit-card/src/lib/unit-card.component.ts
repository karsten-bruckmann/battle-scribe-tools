import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Unit, Weapon } from '@battle-scribe-tools/core/battle-cards';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { TranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { IonicModule } from '@ionic/angular';
import { first, Subject } from 'rxjs';
import { CleanEmptyPipe } from './pipes/clean-empty.pipe';

@Component({
  selector: 'bst-unit-card',
  standalone: true,
  imports: [
    CommonModule,
    TranslatableComponent,
    IonicModule,
    AvatarComponent,
    CleanEmptyPipe,
  ],
  providers: [CleanEmptyPipe],
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
})
export class UnitCardComponent implements AfterViewInit {
  constructor(private cleanEmptyPipe: CleanEmptyPipe) {}

  @Input() unit?: Unit;

  @Output() avatarLoaded = new Subject<void>();

  @ViewChild(AvatarComponent)
  public avatarComponent?: AvatarComponent;

  public getMultiProfileWeaponLineAmount(weapon: Weapon): number {
    return weapon.profiles.reduce(
      (lines, profile) =>
        lines + (this.cleanEmptyPipe.transform(profile.abilities) ? 2 : 1),
      1
    );
  }

  public ngAfterViewInit(): void {
    if (!this.avatarComponent) {
      return;
    }
    this.avatarComponent.avatarLoaded.pipe(first()).subscribe(() => {
      this.avatarLoaded.next();
    });
  }
}
