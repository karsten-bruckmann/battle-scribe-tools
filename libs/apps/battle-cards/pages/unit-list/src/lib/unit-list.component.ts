import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'bc-unit-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent {}
