import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  formSubmitted:boolean =  false;

  form = new FormGroup({
    name: new FormGroup({
      first: new FormControl(''),
      last: new FormControl(''),
    
    }),
    contact: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
    
    })
  });


  constructor() { }

  ngOnInit() {
  }


  submit() {
    console.log(this.form.value);
    this.formSubmitted = true;
  }
// Be careful when using get() properties as they are called multiple time per change detection cycle
// Example putting an async HTTP call in the get() would cause several HTTP requests in the matter of seconds hurting performance
  get emailIsInvalid() {
  return (this.form.controls.contact as FormGroup).controls.email.invalid;
}

 get emailIsInvalidAndTouched() {
  return  this.emailIsInvalid && (this.form.controls.contact as FormGroup).controls.email.touched;
}

/*get passwordIsInvalid() {
  return (this.form.controls.password as FormGroup).controls.password.invalid;
}

get passwordIsInvalidAndTouched() {
  return this.passwordIsInvalid && (this.form.controls.password as FormGroup).controls.password.touched;
}

get passwordsDoNotMatch() {
  return this.form.controls.password.errors && this.form.controls.password.errors.mismatch;
}

get passwordsDoNotMatchAndTouched() {
  return this.passwordsDoNotMatch && (this.form.controls.password as FormGroup).controls.confirm.touched;
}*/
}
