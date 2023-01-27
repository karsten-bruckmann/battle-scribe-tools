import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Output, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable, of, ReplaySubject } from 'rxjs';

@Component({
  selector: 'bc-settings',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements AfterViewInit {
  // constructor(
  //   private rostersService: RostersService,
  //   public state: StateService,
  //   private modalController: ModalController
  // ) {}

  public rosterTitles$ = of(['Foo']);
  // public rosterTitles$ = this.rostersService.titles$;
  public selectedRoster$: ReplaySubject<string> = new ReplaySubject(1);

  @Output() public rosterSelected: Observable<string> =
    this.selectedRoster$.asObservable();

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public async ngAfterViewInit(): Promise<void> {
    if (!this.modal) {
      return;
    }
    // const roster = await firstValueFrom(this.state.roster$);
    // if (!roster) {
    //   this.modal.present();
    // }
  }

  public async saveFile(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!target || !files) {
      return;
    }
    const file: File = files[0];
    if (!file) {
      return;
    }
    // const roster = await this.rostersService.addFromFile(file);
    // this.selectRoster(roster.title);
  }

  public deleteRoster(title: string): void {
    // this.rostersService.delete(title);
  }

  public selectRoster(title: string): void {
    this.selectedRoster$.next(title);
    // this.state.setRoster(title);
    // this.modalController.dismiss();
  }
}
