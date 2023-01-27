import { Injectable } from '@angular/core';
import { AvatarImagesService } from './avatar-images.service';

@Injectable({
  providedIn: 'root',
})
export class AvatarImagesServiceFactory {
  public create(scope: string): AvatarImagesService {
    return new AvatarImagesService(scope);
  }
}
