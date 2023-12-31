import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  standalone: true,
  selector: 'app-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})
export class HeroListComponent {
  heroes = HEROES;
}
