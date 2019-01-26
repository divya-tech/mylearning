import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent {


  constructor() {} 
  form=new FormGroup({
    userName: new FormControl('',[Validators.required,
    Validators.minLength(3)
]),
   email: new FormControl('',Validators.required),
    contactNo :new FormControl('',Validators.required),
    comment: new FormControl('', Validators.required)
})

getFormDetails(form)
{
console.log(form);
}

get userName()
{
   return  this.form.get("userName");
}
get email()
{
    return this.form.get("email");
}

get contactno()
{
  return this.form.get("contactNo");
}
get comment()
{
  return this.form.get("comment");
}



  ngOnInit() {}

  ngOnChanges() {}
}