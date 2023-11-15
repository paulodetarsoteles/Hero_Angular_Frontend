import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-cadastro',
  templateUrl: './hero-cadastro.component.html',
  styleUrls: ['./hero-cadastro.component.css']
})
export class HeroCadastroComponent {

  constructor(private heroService: HeroService, private router: Router){ }

  createHero(hero: Hero): void {
    this.heroService.CreateHero(hero).subscribe((data) => {
      this.router.navigate(['/hero'])    .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    });
  }
}
