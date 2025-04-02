import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorServiceService } from '../service/color-service.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Toast, ToasterService } from '../toastr/toaster.service';
import { Subscription } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-choose-time',
  imports: [FormsModule, CommonModule],
  templateUrl: './choose-time.component.html',
  styleUrl: './choose-time.component.scss',
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class ChooseTimeComponent implements OnInit {
  savedItem: any[] = [];
  cartItemsCount: any;
  success: any;
  toasts: Toast[] = [];



  service: ColorServiceService = inject(ColorServiceService)
  toastr: ToastrService = inject(ToastrService)
  private toasterService = inject(ToasterService);
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.toasterService.toasts$.subscribe(toasts => this.toasts = toasts),
      this.savedItem = JSON.parse(localStorage.getItem('singer') || '[]');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  addItem() {
    const newCount = this.service.cartItemsCount() + 1;
    this.service.cartItemsCount.set(newCount);
    localStorage.setItem('cartCount', newCount.toString());
    this.toastr.success("your slot has been added successfully");
    return newCount
  }

  setData(singer: any) {
    let productDetail = JSON.parse(localStorage.getItem('productDetail') || '[]');
    productDetail.push(singer)
    localStorage.setItem("singer", JSON.stringify(productDetail))
    return productDetail
  }

  sendInfo(singer: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(singer)
    localStorage.setItem("singer", JSON.stringify(cart))
    return cart
  }

  bookTicket(slotData: any) {
    if (slotData) {
      let existingSlots = JSON.parse(localStorage.getItem('slotData') || '[]');
      existingSlots.push(slotData);
      localStorage.setItem('slotData', JSON.stringify(existingSlots));
      return existingSlots
    } else {
    }


  }

  
  removeToast(id: number) {
    this.toasterService.remove(id)
  }

  showToast1() {
    this.toasterService.success('success', 'Slot Booked Successfully')
  }
}
