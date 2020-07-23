import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  display(){
    return['Car', 'Bus', 'Train']
  }
}
