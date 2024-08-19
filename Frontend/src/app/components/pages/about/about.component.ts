import { Component, PLATFORM_ID, Inject, } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser,  } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import * as AOS from 'aos';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
   }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
