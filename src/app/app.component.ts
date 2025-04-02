import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTwoComponent } from "./header-two/header-two.component";
import { ToastrComponent } from "./toastr/toastr.component";
import { ToasterService } from './toastr/toaster.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, FooterComponent, HeaderTwoComponent, ToastrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private toastrService=inject(ToasterService)

  showToast1(){
    this.toastrService.success('success','Slot Booked Successfully')
  }
}
