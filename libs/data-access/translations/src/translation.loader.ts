import { Md5 } from 'ts-md5';
import { Language } from './language';

export const translationsStorageKeyPrefix = 'translations-v2-';

export const loadTranslation = (
  original: string,
  language: Language
): string => {
  const md5 = Md5.hashStr(original);
  return (
    localStorage.getItem(`${translationsStorageKeyPrefix}${language}-${md5}`) ||
    original
  );
};

export const writeTranslation = (
  original: string,
  translation: string | null,
  language: Language
): string => {
  const md5 = Md5.hashStr(original);

  if (!translation || original === translation) {
    localStorage.removeItem(
      `${translationsStorageKeyPrefix}${language}-${md5}`
    );
    return md5;
  }

  localStorage.setItem(
    `${translationsStorageKeyPrefix}${language}-${md5}`,
    translation
  );

  return md5;
};
