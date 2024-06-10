import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFavoriteDescription'
})
export class IsFavoriteDescriptionPipe implements PipeTransform {

  transform(isFavorited: boolean): string {
    return isFavorited ? 'Sim' : 'Não'
  }

}
