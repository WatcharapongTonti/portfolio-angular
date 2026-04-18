import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { SkillsComponent } from '../../components/skills/skills';
import { ProjectsComponent } from '../../components/projects/projects';
import { ExperienceComponent } from '../../components/experience/experience';
import { EducationComponent } from '../../components/education/education';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-projects />
    <app-experience />
    <app-education />
    <app-contact />
  `,
})
export class HomeComponent { }
