import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string): string {
    let time ;
   const arr = value.split(" ");
         if (Number(arr[1].slice(0,2)) >= 0 && Number(arr[1].slice(0,2)) <= 11) {
          time = arr[1]+ ' ' + 'AM';
        }else{
           time = arr[1]+ ' ' + 'PM';
         }
    return time;
  }

}
