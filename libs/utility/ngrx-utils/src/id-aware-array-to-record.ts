export const idAwareArrayToRecord = <T>(
  array: (T & { id: string })[]
): Record<string, T> =>
  array.reduce((record, item) => {
    const idUnaware: T & { id?: string } = { ...item };
    delete idUnaware['id'];
    return { ...record, [item.id]: idUnaware };
  }, {});
