import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RosterModule, RosterService } from '@battle-scribe-tools/core/roster';
import { UserSettingsService } from '@battle-scribe-tools/core/user-settings';
import { Weapon } from '@battle-scribe-tools/data-access/rosters';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { TranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { IonicModule } from '@ionic/angular';
import { CleanEmptyPipe } from './pipes/clean-empty.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RosterModule,
    TranslatableComponent,
    AvatarComponent,
    CleanEmptyPipe,
    RouterModule,
  ],
  providers: [CleanEmptyPipe],
  templateUrl: './battle-card.component.html',
  styleUrls: ['./battle-card.component.scss'],
})
export class BattleCardComponent {
  constructor(
    private rosterService: RosterService,
    private userSettings: UserSettingsService,
    private cleanEmptyPipe: CleanEmptyPipe,
    private activatedRoute: ActivatedRoute
  ) {}

  public roster$ = this.rosterService.getRosterFromRoute$(this.activatedRoute);

  public detachment$ = this.rosterService.getDetachmentFromRoute$(
    this.activatedRoute
  );

  public unit$ = this.rosterService.getUnitFromRoute$(this.activatedRoute);

  public getMultiProfileWeaponLineAmount(weapon: Weapon): number {
    return weapon.profiles.reduce(
      (lines, profile) =>
        lines + (this.cleanEmptyPipe.transform(profile.abilities) ? 2 : 1),
      1
    );
  }
}
