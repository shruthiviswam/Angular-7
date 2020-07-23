import { Component, OnInit } from '@angular/core';
import { CourseService} from '../course.service';
import {DemoserviceService} from '../demoservice.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses : string[];

  isActive : boolean = true;
  on : boolean = false;
  isStarred: boolean = false;

  constructor() {
    let service = new DemoserviceService();
    this.courses = service.display();
   }

  ngOnInit(): void {
  }

  // event binding
  onSave($event){
    console.log("Button Clicked..!")
    console.log($event)
  }

  // event binding
  onKeyUp($event){
    if($event.keyCode==13)
    {
      console.log("Enter Key Pressed!")
    }
  }

  onkeyup($event){
    console.log("Enter key pressed using Angular!")
  }

    // two way data binding
  email1 : string = "abc@gmail.com"
  onkeyuptwoway(){
    alert(this.email1)
  }

  //Custom Pipe 
  text = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.`

    // Star full and empty with click
  onclick(){
    (this.isStarred)=(!this.isStarred)
  }

  // Pipes
  todaydate = new Date();
  jsonval = {name : 'Alex',age:'25',address : {a1 : 'paris', a2:'france'}};
  months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


}
