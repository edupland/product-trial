import { Routes } from '@angular/router';
import { ContactComponent } from './ui/contact/contact-form.component';

export const CONTACT_ROUTES: Routes = [
  {
    path: "",
    component: ContactComponent,
  },
  { path: "**", redirectTo: "" },
];