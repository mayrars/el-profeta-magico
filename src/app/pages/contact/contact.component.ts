import { CommonModule,NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup
  constructor(private formBuilder: FormBuilder){
    this.contactForm= this.formBuilder.group({
      nombre: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(10)]]
    })
  }
  ngOnInit(): void {
    
  }
  hasErrors(controlName: string,errorType: string){
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched
  }
  enviar(event: Event){
    event.preventDefault();
    console.log(this.contactForm)
  }
}
