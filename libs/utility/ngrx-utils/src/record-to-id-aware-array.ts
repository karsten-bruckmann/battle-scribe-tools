export const recordToIdAwareArray = <T>(
  record: Record<string, T>
): (T & { id: string })[] =>
  Object.keys(record).map((id) => ({ ...record[id], id }));
