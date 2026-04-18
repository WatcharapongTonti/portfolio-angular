import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  readonly portfolio = inject(PortfolioService);
}
