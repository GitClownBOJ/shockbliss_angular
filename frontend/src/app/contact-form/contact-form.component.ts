import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Varmista, että kaikki lomakkeisiin liittyvä on importattu
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  // 2. Lisää ReactiveFormsModule tänne, jotta [formGroup] toimii
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  // 3. Lisää @Input(), jotta [formTitle] toimii
  @Input() formTitle: string = 'Send a Transmission';
  
  // 4. Lisää @Output(), jotta (formSubmitted) toimii
  @Output() formSubmitted = new EventEmitter<any>();

  // 5. Määrittele lomakkeen muuttuja
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // 6. Rakenna lomake konstruktorissa
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // 7. Määrittele onSubmit-metodi
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.formSubmitted.emit(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}