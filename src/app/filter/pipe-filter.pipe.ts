import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {

  transform(value: string): any {

    if (value === ' '){
      return value
    }
    return value.toLocaleUpperCase()

  }

}
