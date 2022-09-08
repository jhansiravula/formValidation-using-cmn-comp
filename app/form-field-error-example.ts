import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css']
})
export class FormFieldErrorExample {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder

  ) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      fileName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    const nameControl = this.userForm.get('name');
    nameControl.setErrors({
      "notUnique": true
    });
  }
}
