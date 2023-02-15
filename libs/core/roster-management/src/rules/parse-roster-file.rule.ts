import { Parser, Roster } from '@battle-scribe-tools/utility/rosz2js';

export const parseRosterFile = async (file: File): Promise<Roster> => {
  const parser = new Parser();
  return await parser.parse(file);
};
