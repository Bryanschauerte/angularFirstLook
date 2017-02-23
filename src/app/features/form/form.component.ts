import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from './types/User';

@Component({
  moduleId: module.id,
  templateUrl:'./form.component.html',
  styleUrls:['./form.component.css'],
  selector:'template-driven-form',
  animations:[],
  // inputs: ['hero'],  /alternate means of specifying
  // outputs: ['deleteRequest'],
})
export class FormComponent{
  today = new Date();
  userTypes = ['regular', 'cool', 'niffty'];
  user = new User(22, 'joe', 'x', this.today, 'ss@g.com','cool');

  submitted = false;
  newUser() {
    this.submitted = false;
    this.user = new User(22, '', '', this.today, '','');
  }
  onSubmit(x){
    this.submitted = true;
    console.log(this.user, "user")
    console.log(x.value, "userform")
    this.user = Object.assign({}, this.user, x.value);
    console.log("new user", this.user)
  }
  //allows for the viewing of the form, must add {{diagnostic}} to template
  // get diagnostic() { return JSON.stringify(this.user); }
}
