import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
})
export class AboutComponent {
  readonly portfolio = inject(PortfolioService);
  imgError = false;
}
