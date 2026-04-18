import { Injectable } from '@angular/core';
import {
  ContactItem,
  Education,
  Experience,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
} from '../types/portfolio.types';

export type { ContactItem, Education, Experience, Project, SkillCategory, SocialLink, Stat };

// ─── Service ─────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  // ── Personal Info ──────────────────────────────────────────────────────────
  readonly name = 'Watcharapong Tontipongsa';
  readonly displayName = 'Watcharapong';
  readonly initials = 'WT';
  readonly avatarUrl = 'https://res.cloudinary.com/dqiifup5j/image/upload/q_auto/f_auto/v1776535254/IMG_3458_keovud.jpg';
  readonly faviconUrl = 'https://res.cloudinary.com/dqiifup5j/image/upload/q_auto/f_auto/v1776536383/android-chrome-512x512_vnkyf1.png';
  readonly title = 'Full Stack Developer';
  readonly careerStartDate = new Date(2022, 4, 1); // May 1, 2022
  readonly bio = 'Full Stack Developer who thrives on challenging problems. I stay focused, dig deep, and build solutions that actually work at scale.';
  readonly aboutDescription = `I'm a Full Stack Developer with a strong focus and a drive for challenging problems.
I enjoy working across the full stack — from designing database schemas and building APIs
with ASP.NET Core and Golang, to crafting UIs with React and Next.js.
I stay concentrated under pressure, take ownership of what I build, and always push
for solutions that are reliable, scalable, and maintainable in the long run.`;

  // ── Contact ────────────────────────────────────────────────────────────────
  readonly email = 'watcharapong.tonti@gmail.com';
  readonly phone = '086-379-9166';
  readonly lineId = '0863799166';
  readonly address = '109/63 Suksawat 66 Rd. Bang Phueng, Phrapradang, Samut Prakan 10130';
  readonly github: SocialLink = {
    label: 'GitHub',
    url: 'https://github.com/WatcharapongTonti',
    handle: '@WatcharapongTonti',
  };
  readonly linkedin: SocialLink = {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/watcharapong-tontipongsa-78bb29228/',
    handle: 'in/watcharapong-tontipongsa',
  };

  get emailHref(): string {
    return `mailto:${this.email}`;
  }

  get contactItems(): ContactItem[] {
    return [
      { label: 'Email', value: this.email, href: this.emailHref, icon: 'email' },
      { label: 'LinkedIn', value: this.linkedin.handle, href: this.linkedin.url, icon: 'linkedin', external: true },
      { label: 'GitHub', value: this.github.handle, href: this.github.url, icon: 'github', external: true },
      { label: 'Phone', value: this.phone, href: `tel:${this.phone}`, icon: 'phone' },
      { label: 'LINE', value: this.lineId, href: null, icon: 'line' },
      { label: 'Address', value: this.address, href: null, icon: 'address' },
    ];
  }

  get yearsOfExperience(): number {
    const ms = Date.now() - this.careerStartDate.getTime();
    return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
  }

  // ── About Stats ────────────────────────────────────────────────────────────
  get stats(): Stat[] {
    const totalSkills = this.skillCategories.reduce((sum, c) => sum + c.skills.length, 0);
    const totalCompanies = new Set(this.experiences.map(e => e.company)).size;
    return [
      { value: `${this.yearsOfExperience}+`, label: 'Years Experience' },
      { value: `${totalCompanies}`, label: 'Companies' },
      { value: `${totalSkills}+`, label: 'Technologies' },
    ];
  }

  // ── Skills ─────────────────────────────────────────────────────────────────
  readonly skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Next.js', 'Angular', 'React Native', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: ['ASP.NET Core', 'Golang', 'Node.js', 'NestJS', 'REST API', 'Kafka'],
    },
    {
      name: 'Database',
      icon: '🗄️',
      skills: ['MS SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    },
    {
      name: 'DevOps & Tools',
      icon: '🚀',
      skills: ['Kubernetes', 'Docker', 'CI/CD', 'ELK Stack', 'IIS', 'Jenkins', 'Git', 'ArgoCD'],
    },
  ];

  // ── Projects ───────────────────────────────────────────────────────────────
  readonly projects: Project[] = [
    {
      title: 'Promotion Management System',
      company: 'Thai Beverage Public Company Limited',
      description: 'An enterprise platform for planning, executing, and tracking promotions (discounts, free gifts) with flexible conditions and time ranges for marketing teams.',
      tags: ['React.js', 'Golang', 'Redis', 'Kubernetes', 'ELK Stack', 'CI/CD', 'MS SQL Server', 'Kafka', 'ArgoCD'],
      githubUrl: 'https://github.com/WatcharapongTonti',
      highlights: [
        'Designed database schema and architecture to support complex condition-based rules and multi-promotion combinations',
        'Built promotion calculation API and management backend with Redis caching to reduce latency under high traffic',
        'Integrated with order and product systems; designed API specs for cross-team integration',
        'Deployed on Kubernetes (k3s) with CI/CD pipelines; added ELK Stack monitoring and load testing',
      ],
    },
    {
      title: 'Game Tournament System',
      company: 'Enixer Co., Ltd.',
      description: 'A platform where players can create teams and compete against each other in organized tournaments.',
      tags: ['React.js', 'ASP.NET Core', 'React Native', 'IIS', 'MS SQL Server'],
      githubUrl: 'https://github.com/WatcharapongTonti',
      highlights: [
        'Developed responsive UI for customer & admin websites based on Figma designs',
        'Built RESTful APIs with ASP.NET Core to manage players, teams, brackets, and games',
        'Developed mobile app with React Native and integrated social login functionality',
      ],
    },
    {
      title: 'Point of Sale — Spa System',
      company: 'Enixer Co., Ltd.',
      description: 'A POS system for spa businesses covering product/service management, sales reports, and a tablet app for staff.',
      tags: ['Next.js', 'Tailwind CSS', 'ASP.NET Core', 'React Native', 'IIS', 'Jenkins', 'MS SQL Server'],
      githubUrl: 'https://github.com/WatcharapongTonti',
      highlights: [
        'Developed customer & admin website UI using Next.js and Tailwind CSS',
        'Built RESTful APIs with ASP.NET Core to manage spa services and transactions',
        'Published mobile app to Google Play Store including app signing and store listing',
      ],
    },
    {
      title: 'Human Resource Management (HRM)',
      company: 'Enixer Co., Ltd.',
      description: 'An end-to-end HRM platform covering leave requests, overtime, time tracking, employee data, and payroll.',
      tags: ['Next.js', 'ASP.NET Core', 'React Native', 'IIS', 'PostgreSQL'],
      githubUrl: 'https://github.com/WatcharapongTonti',
      highlights: [
        'Designed database schema based on system requirements and business logic',
        'Configured IIS server, deployed to production, and set up SSL certificates for secure HTTPS access',
        'Deployed mobile apps to both Apple App Store and Google Play Store',
      ],
    },
    {
      title: 'Asset Management System',
      company: 'Enixer Co., Ltd.',
      description: 'A system for managing company assets including creation, editing, depreciation calculation, and report generation.',
      tags: ['Next.js', 'ASP.NET Core', 'IIS', 'MS SQL Server'],
      githubUrl: 'https://github.com/WatcharapongTonti',
      highlights: [
        'Designed the database schema for asset tracking and depreciation logic',
        'Developed full-stack solution with Next.js frontend and ASP.NET Core backend',
        'Implemented depreciation calculation engine and exportable reports',
      ],
    },
  ];

  // ── Education ──────────────────────────────────────────────────────────────
  readonly educations: Education[] = [
    {
      degree: 'Master of Science',
      field: 'Information Technology',
      institution: "King Mongkut's University of Technology Thonburi",
      period: '2023 – 2025',
      gpa: '3.73',
    },
    {
      degree: 'Bachelor of Science',
      field: 'Information Technology',
      institution: "King Mongkut's University of Technology Thonburi",
      period: '2018 – 2022',
      gpa: '2.57',
    },
    {
      degree: 'High School Diploma',
      field: 'English-Mathematics Program',
      institution: 'Bangpakok Witthayakhom School',
      period: '2015 – 2017',
      gpa: '3.26',
    }
  ];

  // ── Experience ─────────────────────────────────────────────────────────────
  readonly experiences: Experience[] = [
    {
      position: 'Full Stack Developer',
      company: 'Thai Beverage Public Company Limited',
      period: 'December 2025 – Present',
      current: true,
      description: [
        'Designed database schema and system architecture for a Promotion Management System supporting complex condition-based rules and multi-promotion combinations',
        'Developed promotion calculation API and CRUD backend for managing promotions (discounts, free gifts) with flexible conditions and time ranges',
        'Optimized API performance using Redis and offline cache to reduce latency and support high-traffic promotion calculation requests',
        'Conducted load testing on promotion APIs to validate system reliability under high request volumes',
        'Integrated the promotion system with order and product systems; maintained consumers to process data correctly',
        'Designed API specifications to enable clear integration by other teams, covering validation and edge cases',
        'Added logging and monitoring via ELK Stack for debugging and issue tracking; performed end-to-end testing',
        'Deployed on Kubernetes (k3s) and maintained CI/CD pipelines for automated deployment and resource scaling',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Enixer Co., Ltd.',
      period: 'May 2022 – November 2025',
      description: [
        'Developed and maintained full-stack web applications using Next.js and ASP.NET Core',
        'Built cross-platform mobile applications with React Native for both iOS and Android',
        'Designed database schemas and managed server infrastructure for production environments',
        'Deployed mobile apps to Apple App Store and Google Play Store',
        'Configured IIS server, set up domain binding, and installed SSL certificates for HTTPS',
      ],
    },
    {
      position: 'Full Stack Developer (Internship)',
      company: 'Enixer Co., Ltd.',
      period: 'January 2022 – May 2022',
      description: [
        'Designed database schema and developed core features for a Ticket Management System',
        'Implemented product management features including deletion workflows',
      ],
    },
  ];
}
