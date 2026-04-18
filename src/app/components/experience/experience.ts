import { Component, inject, AfterViewInit, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styles: [`
    .exp-card {
      opacity: 0;
      transform: translateX(-32px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .exp-card.visible {
      opacity: 1;
      transform: translateX(0);
    }
  `],
})
export class ExperienceComponent implements AfterViewInit {
  readonly portfolio = inject(PortfolioService);
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const cards = this.el.nativeElement.querySelectorAll('.exp-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card: Element, i: number) => {
      (card as HTMLElement).style.transitionDelay = `${i * 150}ms`;
      observer.observe(card);
    });
  }
}
