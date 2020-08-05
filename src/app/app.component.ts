import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';


  // parentMessage = "Message from parent to child"
//   obj = [{name:'John', place:'India'},
//         {name:'Joy', place:'US'},
//         {name:'Jane', place:'Uk'}]
// }

// @ViewChild (ChildComponent) child1;
// message : string;
// ngAfterViewInit(){
//   this.message = this.child1.message
// }

message : string;
recieveMessage ($event){
  this.message = $event
  alert (this.message)
}

}