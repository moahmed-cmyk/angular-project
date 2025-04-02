import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ColorServiceService } from '../color-service.service';
import { ToasterService } from '../../toastr/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seat-reservation',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './seat-reservation.component.html',
  styleUrl: './seat-reservation.component.scss'
})
export class SeatReservationComponent implements OnInit {
  total: number = 600
  mark: number = 512
  serviceFee: number = 1.00;
  slotOne: any[] = [];
  savedItem: any[] = [];
  router: any;

  service: ColorServiceService = inject(ColorServiceService)
  private toasterService = inject(ToasterService);
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.slotOne = JSON.parse(localStorage.getItem('slotData') || '[]');
    console.log(this.slotOne);
    this.savedItem = JSON.parse(localStorage.getItem('slotData') || '[]');
    this.loadFromLocalStorage();
  }

  increaseQuantity(index: number) {
    this.slotOne[index].quantity++;
    this.updateTotalPrice(index);
  }

  decreaseQuantity(index: number) {
    if (this.slotOne[index].quantity > 0) {
      this.slotOne[index].quantity--;
      this.updateTotalPrice(index);
    }
  }

  updateTotalPrice(index: number) {
    this.slotOne[index].totalPrice = this.slotOne[index].quantity * this.slotOne[index].thePrice;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('slotData', JSON.stringify(this.slotOne));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem('slotData');
    if (data) {
      this.slotOne = JSON.parse(data);
    }
  }

  removeItem(index: number) {
    this.slotOne.splice(index, 1);
    this.saveToLocalStorage();
    let newCount = this.service.cartItemsCount() - 1;
    newCount = newCount < 0 ? 0 : newCount;

    this.service.cartItemsCount.set(newCount);
    localStorage.setItem('cartCount', newCount.toString());
  }

  getSubtotal(): number {
    return this.slotOne.reduce((sum, slot) => sum + slot.totalPrice, 0);
  }
  getTotalItems(): number {
    return this.slotOne.reduce((total, slot) => total + slot.quantity, 0);
  }

  getTotalAmount(): string {
    return ((this.getSubtotal() ?? 0) + (this.serviceFee ?? 0)).toFixed(2);
  }

  proceedToSummary() {
    localStorage.setItem('subtotal', JSON.stringify(this.getSubtotal()));
    localStorage.setItem('totalAmount', JSON.stringify(this.getTotalAmount()));
    localStorage.setItem('totalItems', JSON.stringify(this.getTotalItems()));
    this.router.navigate(['/summary']);
  }

  showToast1() {
    this.toasterService.success('success', 'Slot Booked Successfully')
  }

}






