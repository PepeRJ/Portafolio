import { Component, inject, PLATFORM_ID, Inject  } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { Title } from '@angular/platform-browser';
import { ButtonComponent } from '../../shared/button/button.component';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private titleService= inject(Title)
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.titleService.setTitle('Inicio');
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}

