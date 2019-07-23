import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormArray, FormControlDirective } from '@angular/forms';
@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent implements OnInit {

  studentProfileForm = new FormGroup({
    
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    
    dateOfBirth: new FormGroup({
      day: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl('')
    }),
    
    emailId: new FormControl(''),
    mobileNumber: new FormControl(''),
    gender: new FormControl(''),
    
    address: new FormGroup({
      street: new FormControl(''),
      city:new FormControl(''),
      pinCode: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl('')
    }),

    hobbies: new FormArray([
      Drawing: new FormControl[''],
      singing: new FormControl[''],
      dancing: new FormControl[''],
      others: new FormControl['']
    ]),

    qualification: new FormGroup({
      qualificationNumber: new FormControl(''),
      exam: new FormControl(''),
      board: new FormControl(''),
      percentage: new FormControl(''),
      yearOfPassing: new FormControl('')
    }),

    coursesApplied:new FormControl('')
})
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
    console.warn(this.studentProfileForm.value);
  }

}
