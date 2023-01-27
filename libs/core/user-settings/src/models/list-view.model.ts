export type ListView = 'list' | 'grid';

export function isListView(value: string): value is ListView {
  return ['list', 'grid'].includes(value);
}
