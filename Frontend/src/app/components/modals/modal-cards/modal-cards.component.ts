import { Component, Output, EventEmitter, Input, Inject, PLATFORM_ID} from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { isPlatformBrowser, NgOptimizedImage, NgStyle } from '@angular/common';
import * as AOS from 'aos';



@Component({
  selector: 'app-modal-cards',
  standalone: true,
  imports: [ButtonComponent, NgStyle, NgOptimizedImage],
  templateUrl: './modal-cards.component.html',
  styleUrl: './modal-cards.component.scss'
})
export class ModalCardsComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() icons: { src: string, alt: string }[] = [];
  @Input() description!: string;
  @Input() buttons: { href: string, icon: string, text: string }[] = [];
  @Output() close = new EventEmitter<void>();

  isLoading = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  closeModal() {
    this.close.emit();
  }
  onVideoLoad() {
    this.isLoading = false;  // Oculta el spinner y muestra el video
  }
}

