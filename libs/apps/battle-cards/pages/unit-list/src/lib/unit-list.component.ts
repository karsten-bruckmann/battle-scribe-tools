import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RosterService } from '@battle-scribe-tools/core/roster';
import {
  UnitSelection,
  UserSettingsModule,
  UserSettingsService,
} from '@battle-scribe-tools/core/user-settings';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';
import { FeatureTranslatableComponent } from '@battle-scribe-tools/feature/translatable';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'bc-unit-list',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FeatureTranslatableComponent,
    UserSettingsModule,
    AvatarComponent,
  ],
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent implements AfterViewInit {
  constructor(
    private rosterService: RosterService,
    private userSettings: UserSettingsService
  ) {}

  public roster$ = this.rosterService.selected$;

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public view$ = this.userSettings.listView$;

  public open(): void {
    this.modal?.present();
  }

  public async ngAfterViewInit(): Promise<void> {
    const roster = await firstValueFrom(this.roster$);
    if (roster) {
      this.modal?.present();
    }
  }

  public async showSection(selection: UnitSelection | null): Promise<void> {
    const roster = await firstValueFrom(this.roster$);
    if (!roster) {
      return;
    }
    this.userSettings.selectUnit(selection);
  }

  // public async showSummary(summaryName: string): Promise<void> {
  //   const roster = await firstValueFrom(this.state.roster$);
  //   if (!roster) {
  //     return;
  //   }
  //   this.state.setSheet({
  //     type: 'summary',
  //     roster,
  //     summary: summaryName,
  //   });
  // }

  public setView(view: 'list' | 'grid'): void {
    this.userSettings.setListView(view);
  }
}
