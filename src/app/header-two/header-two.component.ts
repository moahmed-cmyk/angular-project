import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ColorServiceService } from '../service/color-service.service';


@Component({
  selector: 'app-header-two',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './header-two.component.html',
  styleUrl: './header-two.component.scss'
})
export class HeaderTwoComponent {
  isActive: boolean = false;

  service:ColorServiceService=inject(ColorServiceService)

  toggleNavbar() {
    this.isActive = !this.isActive;
  }

   countEffect=effect(()=>{
     if(this.service.cartItemsCount()>0){
     }
   })

}
