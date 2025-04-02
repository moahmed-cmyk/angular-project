import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  userForm!: FormGroup
  isSubmitted: boolean = false
  age: string = ""

  showClearButton = false;
  isPasswordVisible: any;

  // Toggle Password Visibility
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      Name: ['', Validators.required]
    });

    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.userForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]] // Password with validation
    });

    this.userForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]] // Password validation
    })
  }

  formBuilder: FormBuilder = inject(FormBuilder)


  checkInput() {
    this.showClearButton = this.userForm.get('Name')?.value.length > 0;
  }

  clearInput() {
    this.userForm.get('Name')?.setValue('');
    this.showClearButton = false;
  }


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  addDetail() {
    this.isSubmitted = true
  }


  checkInputtwo() {
    this.showClearButton = this.userForm.get('email')?.value.length > 0;
  }

  clearInputthree() {
    this.userForm.get('email')?.setValue('');
    this.showClearButton = false;
  }
}
