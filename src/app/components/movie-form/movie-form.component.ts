import { Component } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/service/hero.service';
import { SecretService } from 'src/app/service/secret.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private secretService: SecretService) { }

  ngOnInit(): void {
    this.heroService.GetHeroes().subscribe(data => {
      this.heroes = data;
    });
  }
}
