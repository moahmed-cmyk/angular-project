import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userForm!: FormGroup
  isSubmitted:boolean=false
  age: string = ""
  showClearButton = false;
  isPasswordVisible = false; 

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      age: ['', Validators.required] 
    });
    this.userForm = this.fb.group({
      password: ['', Validators.required] 
    });
  }
  

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  checkInput() {
    this.showClearButton = this.userForm.get('age')?.value.length > 0;
  }

  clearInput() {
    this.userForm.get('age')?.setValue('');
    this.showClearButton = false;
  }

  formBuilder:FormBuilder=inject (FormBuilder)
  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      age: [null, Validators.required],
      password: [null, [Validators.required]],
    })
  }

addDetail() {
 this.isSubmitted=true
}

}
