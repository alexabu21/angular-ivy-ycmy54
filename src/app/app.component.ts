
import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selectedService: any;
 @ViewChild('f') userform:NgForm;
  onSubmit(form){
    console.log(form.value);
    //console.log(this.userform.value);
    
  }
   Services: any=[ 
    {firstname: 'alex', lastname:'lee', age:21, gender:'male', mobilenumber:7708590876}, 
    {firstname: 'sathish', lastname:'kumar', age:23, gender:'male', mobilenumber:98478945612}];
ngOnInit() {
this.selectedService = new Object();
  }
}
