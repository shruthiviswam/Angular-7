import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(val: string, limit : number){
    if (!val){
      return null;
    }
    
    let actualLimit = (limit)?limit:50;
    return val.substring(0,actualLimit)
  }

}
