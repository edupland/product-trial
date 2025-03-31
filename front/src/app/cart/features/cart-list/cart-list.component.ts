import { Component, OnInit, inject } from "@angular/core";
import { CartService } from "app/cart/data-access/cart.service";
import { DataViewModule } from "primeng/dataview";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-product-cart",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.scss"],
  standalone: true,
  imports: [CardModule, DataViewModule],
})
export class CartListComponent implements OnInit {
  private readonly cartService = inject(CartService);

  public readonly cart = this.cartService.cart();

  ngOnInit(): void {
    this.cartService.get().subscribe;
  }
}