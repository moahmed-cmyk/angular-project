import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  subtotal: number = 0;
  totalAmount: number = 0;
  totalItems: number = 0;
  serviceFee: number = 1.00; 
  checkout:any[]=[]
  userForm!: FormGroup
  isSubmitted:boolean=false
  age: string = ""
  formBuilder:FormBuilder=inject (FormBuilder)
  slotOne: any;

  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      card: [null, Validators.required,Validators.minLength(8)],
      expiry: [null, [Validators.required,Validators.minLength(4)]],
      cvv: [null, [Validators.required,Validators.minLength(3)]],
      name: [null, [Validators.required,Validators.minLength(8)]],
      password: [null, [Validators.required,Validators.minLength(8)]],

    })
    this.checkout = JSON.parse(localStorage.getItem('slotData') || '[]');

      this.subtotal = JSON.parse(localStorage.getItem('subtotal') || '0');
      this.totalAmount = JSON.parse(localStorage.getItem('totalAmount') || '0');
      this.totalItems = JSON.parse(localStorage.getItem('totalItems') || '0');

  }

addDetail() {
  this.isSubmitted=true
  return this.isSubmitted;
}

}
