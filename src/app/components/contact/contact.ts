import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './contact.html',
})
export class ContactComponent {
  readonly portfolio = inject(PortfolioService);
}
