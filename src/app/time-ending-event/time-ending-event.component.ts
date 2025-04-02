import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ColorServiceService } from '../service/color-service.service';

@Component({
  selector: 'app-time-ending-event',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './time-ending-event.component.html',
  styleUrl: './time-ending-event.component.scss'
})
export class TimeEndingEventComponent implements OnInit {
  timeEventOne: any[] = [];

  service: ColorServiceService = inject(ColorServiceService)

  constructor() { }

  ngOnInit(): void {
    this.timeEventOne = JSON.parse(localStorage.getItem('timeEndingEvent') || '[]');
  }

  addItem() {
    const newCount = this.service.cartItemsCount() + 1;
    this.service.cartItemsCount.set(newCount);
    localStorage.setItem('cartCount', newCount.toString());
  }

  bookTicket(slotData: any) {
    if (slotData) {
      let existingSlots = JSON.parse(localStorage.getItem('slotData') || '[]');
      existingSlots.push(slotData);
      localStorage.setItem('slotData', JSON.stringify(existingSlots));
      alert("Slot booked successfully!");
    } else {
    }
  }

}
