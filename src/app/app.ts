import { Component, inject, OnInit, DOCUMENT } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private titleService = inject(Title);
  private portfolio = inject(PortfolioService);
  private document = inject(DOCUMENT);

  ngOnInit() {
    this.titleService.setTitle(`${this.portfolio.name} - ${this.portfolio.title}`);

    const img = new Image();
    img.onload = () => {
      const link: HTMLLinkElement =
        this.document.querySelector('link[rel="icon"]') ??
        Object.assign(this.document.createElement('link'), { rel: 'icon' });
      link.type = 'image/png';
      link.href = this.portfolio.faviconUrl;
      this.document.head.appendChild(link);
    };
    img.src = this.portfolio.faviconUrl;
  }
}
