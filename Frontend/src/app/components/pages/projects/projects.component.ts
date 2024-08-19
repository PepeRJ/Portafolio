import { Component, signal, PLATFORM_ID, Inject } from '@angular/core';
import { ModalCardsComponent } from '../../modals/modal-cards/modal-cards.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import * as AOS from 'aos';




@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [  ModalCardsComponent, ButtonComponent, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  
  private scrollPosition = 0;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
  projects: any[] = [
    {
      name: 'healthy',
      image: '/assets/images/web-healthy.png',
      title: 'Web para cliente',
      icons: [
        { src: '/assets/icons/angular.ico', alt: 'Angular' },
        { src: '/assets/icons/js.png', alt: 'JavaScript' },
        { src: '/assets/icons/ts.png', alt: 'TypeScript' },
        { src: '/assets/icons/html.png', alt: 'Html' },
        { src: '/assets/icons/css.png', alt: 'Css' },
        { src: '/assets/icons/scss.png', alt: 'Scss' },
        { src: '/assets/icons/node.png', alt: 'Node.js' }
      ],
      description: 'Este proyecto involucró la creación de un sitio web robusto utilizando Angular v18 para el frontend, junto con Node.js y Express para el backend. Implementé una funcionalidad clave que envía datos del formulario de contacto directamente al email del cliente, asegurando una comunicación eficiente. Utilicé la técnica de Server-Side Rendering (SSR) para generar páginas en el servidor y enviarlas ya renderizadas al navegador. Esto no solo mejora la velocidad de carga inicial, especialmente en conexiones lentas, sino que también optimiza el SEO al facilitar la indexación del contenido por los motores de búsqueda. Adicionalmente, optimicé imágenes con "NgOptimizedImage" de Angular, ajustando automáticamente su calidad y tamaño para diferentes dispositivos, lo que mejora el rendimiento y la experiencia del usuario.',
      buttons: [
        { href: 'https://www.healthywithruben.com/', icon: 'bx bx-globe', text: 'Visitar Sitio Web' }
      ]
    },
    {
      name: 'ecommerce',
      image: '/assets/images/app-ecommerce.png',
      title: 'Ecommerce',
      icons: [
        { src: '/assets/icons/angular.ico', alt: 'Angular' },
        { src: '/assets/icons/js.png', alt: 'JavaScript' },
        { src: '/assets/icons/ts.png', alt: 'TypeScript' },
        { src: '/assets/icons/html.png', alt: 'Html' },
        { src: '/assets/icons/css.png', alt: 'Css' },
        { src: '/assets/icons/scss.png', alt: 'Scss' },
        { src: '/assets/icons/mysql.png', alt: 'MySql' },
        { src: '/assets/icons/node.png', alt: 'Node.js' }
      ],
      description: 'Esta tienda en línea fue desarrollada usando Angular v18 (SPA) para construir un frontend dinámico, apoyándome en Angular Material para componentes clave como el carrito de compras y los botones. En el backend, implementé Node.js con Express para facilitar la comunicación y gestión de datos, conectando a una base de datos relacional MySQL. Esta combinación tecnológica permitió crear una plataforma eficiente y escalable, asegurando una experiencia de compra fluida y moderna.',
      buttons: [
        { href: 'https://github.com/PepeRJ/Ecommerce-APP', icon: 'bx bxl-github', text: 'Repositorio' },
        { href: 'https://www.youtube.com/watch?v=Eqd7I83r9pI', icon: 'bx bxs-videos', text: 'Despliegue' }
      ]
    },
    {
      name: 'tareas',
      image: '/assets/images/app-tareas.png',
      title: 'App Gestor de Tareas',
      icons: [
        { src: '/assets/icons/angular.ico', alt: 'Angular' },
        { src: '/assets/icons/js.png', alt: 'JavaScript' },
        { src: '/assets/icons/ts.png', alt: 'TypeScript' },
        { src: '/assets/icons/html.png', alt: 'Html' },
        { src: '/assets/icons/css.png', alt: 'Css' },
        { src: '/assets/icons/scss.png', alt: 'Scss' }
        
      ],
      description: 'Esta aplicación fue desarrollada como una Single Page Application (SPA) con Angular, ofreciendo así una experiencia de usuario fluida y rápida, al evitar recargas completas de página. Utilizamos Angular Material para lograr un diseño moderno y atractivo, y aprovechamos los pipes de Angular para filtrar eficazmente los resultados de búsqueda. Diseñada para optimizar la organización diaria, permite a los usuarios crear, seguir y completar tareas con facilidad. El objetivo principal es mejorar la productividad mediante una gestión visual y eficiente de las actividades pendientes.',
      buttons: [
        { href: "https://github.com/PepeRJ/App-Gestor-de-Tareas", icon: 'bx bxl-github', text: 'Repositorio' },
        { href: "https://iridescent-nasturtium-c087d8.netlify.app/", icon: "bx bx-globe", text: 'Demo' }
      ]
    },
    {
      name: 'tiempo',
      image: '/assets/images/app-tiempo.png',
      title: 'App del Tiempo',
      icons: [
        { src: '/assets/icons/angular.ico', alt: 'Angular' },
        { src: '/assets/icons/js.png', alt: 'JavaScript' },
        { src: '/assets/icons/ts.png', alt: 'TypeScript' },
        { src: '/assets/icons/html.png', alt: 'Html' },
        { src: '/assets/icons/css.png', alt: 'Css' },
        { src: '/assets/icons/scss.png', alt: 'Scss' }  
      ],
      description: 'Esta aplicación web, desarrollada como una Single Page Application (SPA) en Angular, permite a los usuarios consultar el clima de diferentes localidades de manera eficiente. Al emplear la API de OpenWeather, la aplicación realiza consumos HTTP para interactuar con dos servicios: el primero lista todas las ciudades que coinciden con el término de búsqueda proporcionado, mientras que el segundo proporciona información detallada en formato JSON sobre la ciudad seleccionada. El uso de SPA optimiza la interactividad y velocidad, eliminando la necesidad de recargar la página completa y ofreciendo una experiencia de usuario más fluida. Este proyecto no solo facilita el acceso rápido a datos meteorológicos, sino que también sirve como excelente práctica para el manejo y consumo de solicitudes HTTP en Angular.',
      buttons: [
        { href: "https://github.com/PepeRJ/App-del-Tiempo", icon: 'bx bxl-github', text: 'Repositorio' },
        { href: "https://incredible-elf-538705.netlify.app", icon: "bx bx-globe", text: 'Demo' }
      ]
    },
    
   
  ];

  activeModal = signal<string | null>(null);

  openModal(modal: string) {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop; // Guarda la posición del scroll actual
    this.activeModal.set(modal);

    // Manten el contenido detrás del modal visible y ajusta el scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    document.body.style.background = 'rgba(0, 0, 0, 0.5)'; // Aplicar un fondo oscuro transparente al contenido detrás
  }

  closeModal() {
    this.activeModal.set(null);

    // Restaurar el scroll a la posición guardada
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    document.body.style.width = '';
    document.body.style.background = ''; // Quitar el fondo oscuro transparente

    window.scrollTo(0, this.scrollPosition);

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }

  getActiveProject(): any | undefined {
    return this.projects.find(project => project.name === this.activeModal());
  }
}