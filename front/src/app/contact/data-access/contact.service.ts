import { Injectable, inject } from "@angular/core";
import { Contact } from "./contact.model";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable({
  providedIn: "root"
}) export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly path = "/api/contact";

  public send(contact: Contact): Observable<boolean> {
    return this.http.post<boolean>(this.path, contact).pipe(
      catchError(() => {
        return of(true);
      }),
      tap(() => console.log('send'))
    );
  }
}