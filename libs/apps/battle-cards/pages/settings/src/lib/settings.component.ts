import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { RosterModule, RosterService } from '@battle-scribe-tools/core/roster';
import { IonicModule, ModalController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'bc-settings',
  standalone: true,
  imports: [CommonModule, IonicModule, RosterModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements AfterViewInit {
  constructor(
    private rostersService: RosterService,
    private modalController: ModalController
  ) {}

  public rosterTitles$ = this.rostersService.list$;

  @Output() public rosterSelected: EventEmitter<void> = new EventEmitter();

  @ViewChild('modal') public modal?: HTMLIonModalElement;

  public async ngAfterViewInit(): Promise<void> {
    if (!this.modal) {
      return;
    }
    const roster = await firstValueFrom(this.rostersService.selected$);
    if (!roster) {
      this.modal.present();
    } else {
      this.rosterSelected.next();
    }
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
    await this.rostersService.addRoster(file);
  }

  public deleteRoster(index: number): void {
    this.rostersService.deleteRoster(index);
  }

  public selectRoster(index: number): void {
    this.rostersService.selectRoster(index);
    this.rosterSelected.next();
    this.modalController.dismiss();
  }
}
