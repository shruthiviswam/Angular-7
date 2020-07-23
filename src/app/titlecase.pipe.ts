import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string) {

    if (!value){
      return null;
    }

    let prepositions : string[] = ['of','the']
    let w =value.split(' ')
    for (var i=0;i<w.length;i++){
      if(prepositions.includes(w[i].toLowerCase()) && i>0){
        w[i] = w[i].toLowerCase()
      }
      else{
        w[i]=w[i].substr(0,1).toUpperCase()+w[i].substr(1).toLowerCase()
      }
    }
    
    return w.join(' ')
  }

}
