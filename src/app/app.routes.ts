import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChooseTimeComponent } from './choose-time/choose-time.component';
import { SeatReservationComponent } from './service/seat-reservation/seat-reservation.component';
import { TimeEndingEventComponent } from './time-ending-event/time-ending-event.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    {path:"",component:LandingPageComponent},
    {path:"chooseTime",component:ChooseTimeComponent},
    {path:"reservation",component:SeatReservationComponent},
    {path:"timeEnding",component:TimeEndingEventComponent},
    {path:"login",component:LoginComponent},
    {path:"registerForm",component:RegisterFormComponent},
    {path:"checkOut",component:CheckoutComponent},
];
