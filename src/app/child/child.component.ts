import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  ngOnInit(): void {
  }

  // @Input() childMessage : string[];
  // message : string =  "Message from child!"
  // @Output() messageEvent = new EventEmitter <string>();
  // constructor() {}

  // sendMessage(){
  //   this.messageEvent.emit(this.message)
  // }

  // courses : number[] = [1,2,3]
  // ViewMode : string;
  // ob = [ {name : 'John'},
  //         {name : 'Anu'}, 
  //         {name : 'Riya'}]

  getcolor(){
    return "blue";
  }

  myStyle(){
    return true;
  }


}



