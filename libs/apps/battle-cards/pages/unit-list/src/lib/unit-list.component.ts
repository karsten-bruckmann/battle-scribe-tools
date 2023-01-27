import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

@Component({
  selector: 'bc-unit-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent {
  // constructor(
  //   private rostersService: RostersService,
  //   private state: StateService
  // ) {}

  // public roster$ = this.state.roster$.pipe(
  //   filter((r): r is string => !!r),
  //   switchMap((roster) => this.rostersService.roster$(roster))
  // );

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public view$ = of('foo');
  // public view$ = this.state.indexView$;

  public open(): void {
    this.modal?.present();
  }

  // public async ngAfterViewInit(): Promise<void> {
  //   const roster = await firstValueFrom(this.state.roster$);
  //   const sheet = await firstValueFrom(this.state.sheet$);
  //   if (!!roster && !sheet) {
  //     this.modal?.present();
  //   }
  // }

  // public async showSection(
  //   rosterName: string,
  //   detachmentName: string,
  //   unitName: string
  // ): Promise<void> {
  //   const roster = await firstValueFrom(this.state.roster$);
  //   if (!roster) {
  //     return;
  //   }
  //   this.state.setSheet({
  //     type: 'unit',
  //     roster: rosterName,
  //     detachment: detachmentName,
  //     unit: unitName,
  //   });
  // }

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

  // public setView(view: 'list' | 'grid'): void {
  //   this.state.setIndexView(view);
  // }
}
