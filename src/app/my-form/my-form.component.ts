import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild ('f' , {static : false}) signupForm : NgForm

  data : string = "";

  onSubmit(){
    console.log(this.signupForm);
    this.data = this.signupForm.value.username
  }

  answer:string ="";

  genders = ['male','female']

  secretques : string = "Q1";
  suggestUsername(){
    console.log(this.signupForm);
    const suggestedName = "super user";
    this.signupForm.form.patchValue({
      username : suggestedName
    })
    // this.signupForm.setValue({
    //   username : suggestedName,
    //   email : 'abc@abc.com',
    //   secret : this.secretques,
    //   questionAnswer : '',
    //   gender : 'male'
      
    // })
    
  }
  


  // onSubmit(f : NgForm){
  //   // alert("Successfully Submitted!")
  //   console.log(f);
  // }

}
