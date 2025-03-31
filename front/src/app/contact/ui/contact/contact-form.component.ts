import { CommonModule } from '@angular/common';
import { Component, input, Output, computed, EventEmitter, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from 'app/contact/data-access/contact.model';
import { ContactService } from 'app/contact/data-access/contact.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

const emptyContact: Contact = {
  email: "",
  message: "",
};

@Component({
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
  ],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  showSuccessMessage = false;
  public readonly contact = input.required<Contact>();
  private readonly contactService = inject(ContactService);

  @Output() send = new EventEmitter<Contact>();

  public readonly editedContact = computed(() => (emptyContact));

  onSend() {
    this.contactService.send(this.editedContact()).subscribe(() => {
      this.showSuccessMessage = true;
    });
  }
}