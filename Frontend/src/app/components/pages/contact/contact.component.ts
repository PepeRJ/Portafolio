import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;
  exito: WritableSignal<boolean | undefined> = signal(undefined);
  cargando = signal(false);

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      if (this.exito() !== undefined) {
        this.contactForm.reset();
        setTimeout(() => {
          this.exito.set(undefined);
        }, 4000);
      }
    })}


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  sendForm() {
    if (this.contactForm.invalid) return;

    this.cargando.set(true);
    this.exito.set(undefined);

    const apiUrl = environment.backendUrl + '/send-email';

    this.http.post(apiUrl, this.contactForm.value).subscribe({
      next: (response: any) => {
        console.log('Respuesta del servidor:', response);
        this.exito.set(true);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al enviar el formulario:', err);
        this.exito.set(false);
        this.cargando.set(false);
      }
    });
  }
}
