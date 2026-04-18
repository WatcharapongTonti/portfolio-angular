import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-slate-900 border-t border-slate-800 py-6">
      <div class="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>Designed &amp; Built by <span class="text-indigo-400">{{ portfolio.name }}</span> &middot; {{ year }}</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly portfolio = inject(PortfolioService);
  readonly year = new Date().getFullYear();
}
