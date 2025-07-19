import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';

@Component({
  selector: 'app-student-registration',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {
  registrationForm: FormGroup;

  courses = ['B.Sc', 'B.Com', 'B.Tech', 'B.A'];
  extra_activity_List = ['PH', 'Sports', 'NCC', 'NSS', 'Ex-Service Man'];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      // 1. Student Registration Details
      full_name: ['', Validators.required],
      ssc_hall_ticket_no: ['', Validators.required],
      aadhaar_number: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      ssc_pass_year: ['', Validators.required],
      email_id: ['', [Validators.required, Validators.email]],
      mobile_no: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['Male', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      mother_tongue: ['', Validators.required],
      ll_language: ['Telugu', Validators.required],
      religion: ['', Validators.required],
      caste_category: ['', Validators.required],
      identification_marks: ['', Validators.required],
      extra_curicular_activities: this.fb.array([], Validators.required),
      // 2. Parent Details
      father_name: ['', Validators.required],
      father_aadhaar_no: ['', Validators.required],
      mother_name: ['', Validators.required],
      mother_aadhaar_no: ['', Validators.required],
      guardian_name: ['', Validators.required],
      guardian_aadhaar_no: ['', Validators.required],
      father_occupation: ['', Validators.required],
      annual_income: ['', Validators.required],
      parent_mobile_no: ['', Validators.required],
      // 3. Address for communication
      door_number: ['', Validators.required],
      street_name: ['', Validators.required],
      village: ['', Validators.required],
      mandal: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      // 4. Previous Accademic Details
      school_college: ['', Validators.required],
      english_gpa: ['', Validators.required],
      maths_gpa: ['', Validators.required],
      general_science_gpa: ['', Validators.required],
      social_studies_gpa: ['', Validators.required],
      total_marks_grade: ['', Validators.required],
      perc_gpa: ['', Validators.required],
      year_of_pass: ['', Validators.required],
      pass_type: ['Regular', Validators.required],
      board_name: ['SSC', Validators.required],
      hall_ticket_no: ['', Validators.required],
      place_of_study: ['', Validators.required],
      // course: ['', Validators.required],
    });
  }

  // Activities FormArray getter
  onActivityChange(activity: string, isChecked: boolean) {
    const activitiesArray = this.registrationForm.get('extra_curicular_activities') as FormArray;

    if (isChecked) {
      activitiesArray.push(this.fb.control(activity));
    } else {
      const index = activitiesArray.controls.findIndex(x => x.value === activity);
      activitiesArray.removeAt(index);
    }
  }

  // submit the form
  onSubmit() {
    console.log(this.registrationForm.value);

    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Student registered successfully!');
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

  // clear the form
  clear() {
    this.registrationForm.reset();
    // Clear the FormArray for languages
    const languagesArray = this.registrationForm.get('languages') as FormArray;
    while (languagesArray.length !== 0) {
      languagesArray.removeAt(0);
    }
  }
}
