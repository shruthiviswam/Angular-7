import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ControlContainer } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  signupForm : FormGroup
  genders = ['male','female']
 
  

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required,this.namecheck]),
      'email' : new FormControl(null,[Validators.required, Validators.email],this.forbiddenEmailAddress),
      'age' : new FormControl(null,[Validators.required,this.ageRangeValidator]),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    })

  }

    namecheck(control : AbstractControl):{[key : string]:Boolean}{
      
      if(control.value=='apple'){
        return {'check' : true};
      }
      return null;
    }

    ageRangeValidator(control : AbstractControl):{[key : string]:Boolean}{
      if(control.value!==undefined && (isNaN(control.value)||control.value<18||control.value>45)){
        return {'ageRange' : true};
      }
      return null;
    }
    
    forbiddenEmailAddress(control : AbstractControl): 
    Promise <any> | Observable <any>{
      const promise = new Promise <any>(
        (resolve,reject) => {
          setTimeout(() => {
            if (control.value=='test@test.com'){
              resolve({'emailforbidden' : true})
            }
            else{
              resolve(null)
            }
          },1500);
        }
      )
      return promise;
    } 
  

  // ngOnInit(): void {
  //   this.signupForm = new FormGroup({
  //     'name' : new FormControl(null, Validators.required),
  //     'skills' : new FormArray([]),
  //     'exp' : new FormArray([])
  //   })

  // }

  onSubmit(){
    console.clear()
    console.log(this.signupForm)
  }

  // isSubmit : boolean = false;
  //  onSubmit(){
  //   this.isSubmit = true;
  // }
  
  onAddHobbies(){
    const control = new FormControl (null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  removeHobby(index : number){
    (<FormArray>this.signupForm.get('hobbies')).removeAt(index);
  }

  // onAddskills(){
  //   const control = new FormControl (null, Validators.required);
  //   (<FormArray>this.signupForm.get('skills')).push(control);
  //   (<FormArray>this.signupForm.get('exp')).push(control);
  // }

  // removeskills(index : number){
  //   (<FormArray>this.signupForm.get('skills')).removeAt(index);
  //   (<FormArray>this.signupForm.get('exp')).removeAt(index);
  // }

}