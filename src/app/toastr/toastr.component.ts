import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Toast, ToasterService } from './toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toastr',
  imports: [FormsModule, CommonModule],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss',
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
export class ToastrComponent implements OnInit {
  private toasterService = inject(ToasterService);
  toasts: Toast[] = [];
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.toasterService.toasts$.subscribe(toasts => this.toasts = toasts)
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  removeToast(id: number) {
    this.toasterService.remove(id)
  }

}


