import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RosterService } from '@battle-scribe-tools/core/roster';
import {
  UnitSelection,
  UserSettingsService,
} from '@battle-scribe-tools/core/user-settings';
import {
  Detachment,
  Roster,
  Unit,
  Weapon,
} from '@battle-scribe-tools/data-access/rosters';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { FeatureTranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { IonicModule } from '@ionic/angular';
import { combineLatest, filter, map } from 'rxjs';
import { CleanEmptyPipe } from '../../pipes/clean-empty.pipe';

@Component({
  selector: 'bc-card-unit',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FeatureTranslatableComponent,
    AvatarComponent,
    CleanEmptyPipe,
  ],
  providers: [CleanEmptyPipe],
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent {
  constructor(
    private rosterService: RosterService,
    private userSettings: UserSettingsService,
    private cleanEmptyPipe: CleanEmptyPipe
  ) {}

  public sheet$ = this.userSettings.selectedUint$.pipe(
    filter((s): s is UnitSelection => !!s)
  );

  public roster$ = this.rosterService.selected$.pipe(
    filter((roster): roster is Roster => !!roster)
  );

  public detachment$ = combineLatest([this.roster$, this.sheet$]).pipe(
    map(([roster, sheet]) =>
      roster.detachments.find((d) => d.title === sheet.detachment)
    ),
    filter((v): v is Detachment => !!v)
  );

  public unit$ = combineLatest([this.detachment$, this.sheet$]).pipe(
    map(([detachment, sheet]) =>
      detachment.units.find((d) => d.title === sheet.unit)
    ),
    filter((v): v is Unit => !!v)
  );

  public getMultiProfileWeaponLineAmount(weapon: Weapon): number {
    return weapon.profiles.reduce(
      (lines, profile) =>
        this.cleanEmptyPipe.transform(profile.abilities) ? 0 : 1,
      1
    );
  }
}
