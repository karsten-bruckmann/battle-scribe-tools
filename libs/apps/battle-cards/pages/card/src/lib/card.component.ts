import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarComponent } from '@battle-scribe-tools/feature/avatar';

@Component({
  selector: 'bc-card',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {}
