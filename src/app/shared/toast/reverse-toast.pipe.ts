import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseToast'
})
export class ReverseToastPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
