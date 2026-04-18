import { Component, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  readonly portfolio = inject(PortfolioService);

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  readonly navLinks = [
    { label: 'About', fragment: 'about' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Education', fragment: 'education' },
    { label: 'Contact', fragment: 'contact' },
  ];
}
