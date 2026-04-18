import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
})
export class SkillsComponent {
  readonly portfolio = inject(PortfolioService);
}
