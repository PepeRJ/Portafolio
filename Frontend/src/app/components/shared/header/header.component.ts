import { Component, HostListener, inject, Inject, Input, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;
  activeLink: string = 'home';
  @Input() isActive: boolean = true;
  isBrowser: boolean;
  scrollTimeout: any;
  manualNavigationTimeout: any;

  private titleService= inject(Title)
  private metaService = inject(Meta);

 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {

      const initialHash = window.location.hash.substring(1);
      if (initialHash) {
        this.setActiveLink(initialHash);
      }
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
    this.updateTitle(link);


   
    if (this.isBrowser) {
      window.location.hash = link;
    }

    // Deshabilitar temporalmente la lógica del evento de scroll
    clearTimeout(this.manualNavigationTimeout);
    this.manualNavigationTimeout = setTimeout(() => {
      this.manualNavigationTimeout = null;
    }, 1000); // Asegurar una breve demora para evitar que el scroll sobrescriba el título inmediatamente
  }

  private updateTitle(link: string): void {
    switch (link) {
      case 'home':
        this.titleService.setTitle('Inicio');
        this.metaService.updateTag({ name: 'description', content: 'Portafolio de un frontend. Desarrollador web' });
        break;
      case 'projects':
        this.titleService.setTitle('Proyectos');
        this.metaService.updateTag({ name: 'description', content: 'Portafolio de mis proyectos como programador web.' });
        break;
      case 'about':
        this.titleService.setTitle('Sobre mí');
        this.metaService.updateTag({ name: 'description', content: 'Conoce más sobre mi trayectoria profesional y mi perfil personal.' });
        break;
      case 'skills':
        this.titleService.setTitle('Skills');
        this.metaService.updateTag({ name: 'description', content: 'Descubre mis habilidades clave y cómo puedo contribuir a tus proyectos.' });
        break;
      case 'contact':
        this.titleService.setTitle('Contacto');
        this.metaService.updateTag({ name: 'description', content: 'Ponte en contacto conmigo para más información o colaboración.'});
        break;
      default:
        this.titleService.setTitle('Mi Aplicación');
        this.metaService.updateTag({ name: 'description', content: 'Bienvenido a mi aplicación. Explora y conoce más sobre mis habilidades y proyectos.'});
        break;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isBrowser) return;

    // Prevenir que el evento de scroll sobrescriba el título inmediatamente después de un clic en un enlace
    if (this.manualNavigationTimeout) return;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      const sections = ['home', 'projects', 'about', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && this.isElementInViewport(element)) {
          if (this.activeLink !== section) {
            this.activeLink = section;
            this.updateTitle(section);
          }
          break;
        }
      }
    }, 100); // 100 ms de retraso después de que el desplazamiento se haya detenido
  }

  private isElementInViewport(el: HTMLElement): boolean {
    if (!this.isBrowser) return false;

    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight * 0.5 && // Considera la mitad de la ventana como visible
      rect.bottom >= window.innerHeight * 0.5
    );
  }
}


