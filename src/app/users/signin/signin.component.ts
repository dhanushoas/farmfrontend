import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for formGroup

@Component({
  selector: 'app-signin',
  standalone: true, // Mark as standalone
  imports: [CommonModule, ReactiveFormsModule], // Add required modules
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\+91[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required, this.validateAge]],
      gender: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
        ]
      ]
    });
  }

  validateAge(control: any) {
    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 18 ? null : { ageInvalid: true };
  }

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Form Submitted:', this.signinForm.value);
    }
  }
}
