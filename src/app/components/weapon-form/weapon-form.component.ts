import { Component } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/service/hero.service';
import { SecretService } from 'src/app/service/secret.service';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.css']
})
export class WeaponFormComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private secretService: SecretService) { }

  ngOnInit(): void {
    this.heroService.GetHeroes().subscribe(data => {
      this.heroes = data;
    });
  }
}
