import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'app-education',
    standalone: true,
    templateUrl: './education.html',
})
export class EducationComponent {
    portfolio = inject(PortfolioService);
}
