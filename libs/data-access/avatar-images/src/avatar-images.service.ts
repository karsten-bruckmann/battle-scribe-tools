import { IDBPDatabase, openDB } from 'idb';
import {
  filter,
  from,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';

export class AvatarImagesService {
  constructor(private storeName: string) {}

  private changed$ = new Subject<string>();

  private get db(): Promise<IDBPDatabase> {
    return openDB('images', 1, {
      upgrade: (db) => {
        db.createObjectStore(this.storeName);
      },
    });
  }

  public getImage$(name: string): Observable<string | null> {
    return this.changed$.pipe(
      filter((c) => c === name),
      startWith(name),
      switchMap((n) =>
        from(
          this.db.then((db) => {
            return db.get<string>(this.storeName, `${n}`);
          })
        )
      ),
      map((d: string | undefined): string | null => d || null)
    );
  }

  public async setImage(name: string, image: File): Promise<void> {
    const data = await this.convertBase64(image);
    const db = await this.db;
    await db.put(this.storeName, data, name);
    this.changed$.next(name);
  }

  public async deleteImage(name: string): Promise<void> {
    const db = await this.db;
    await db.delete(this.storeName, name);
    this.changed$.next(name);
  }

  private async convertBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        const result = fileReader.result;
        if (!result) {
          reject();
          return;
        }
        resolve(result.toString());
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
}
