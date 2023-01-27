import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RosterService } from '@battle-scribe-tools/core/roster';
import { IonicModule } from '@ionic/angular';
import { UnitComponent } from './components/unit/unit.component';

@Component({
  selector: 'bc-card',
  standalone: true,
  imports: [CommonModule, IonicModule, UnitComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private rosterService: RosterService) {}

  public roster$ = this.rosterService.selected$;
}
