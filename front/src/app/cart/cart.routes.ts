import { Routes } from '@angular/router';
import { CartListComponent } from './features/cart-list/cart-list.component';

export const CART_ROUTES: Routes = [
  {
    path: "list",
    component: CartListComponent,
  },
  { path: "**", redirectTo: "list" },
]