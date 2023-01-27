import { Roster } from './roster.model';

export interface State {
  selected: number | null;
  rosters: Roster[];
}
