import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dots'
})
export class DotsPipe implements PipeTransform {

  transform(value: string , filter: number , filterChar: string): string {
    if(value.length > filter){
      return value.substr(0,filter) + filterChar;
    }
    return value
  }

}
