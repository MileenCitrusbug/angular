import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value*2.54
    ;
  }

}
