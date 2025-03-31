import { Injectable, inject, signal } from '@angular/core';
import { Cart } from './cart.model';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from "rxjs";
import { Product } from 'app/products/data-access/product.model';

@Injectable({
  providedIn: "root"
}) export class CartService {
  private readonly http = inject(HttpClient);
  private readonly path = "/api/cart";

  private readonly _cart = signal<Cart[]>([]);
  public readonly cart = this._cart.asReadonly();

  public get(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.path).pipe(
      catchError(() => {
        return this.http.get<Cart[]>("assets/cart.json");
      }),
      tap((cart) => this._cart.set(cart)),
    );
  }

  public add(product: Product): Observable<boolean> {
    return this.http.patch<boolean>(this.path, product).pipe(
      catchError(() => {
        return of(true);
      }),
      tap(() => this._cart.update(cart => [...cart, product])),
    );
  }

  public remove(product: Product): Observable<boolean> {
    return this.http.patch<boolean>(this.path, product).pipe(
      catchError(() => {
        return of(true);
      }),
      tap(() => this._cart.update(cart => cart.filter(c => c.id != product.id))),
    );
  }
}