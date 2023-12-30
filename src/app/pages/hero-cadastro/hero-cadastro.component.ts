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

  btnAcao: string = "Incluir";
  btnTitulo: string = "Cadastrar novo herói";

  constructor(private heroService: HeroService, private router: Router) { }

  createHero(hero: Hero): void {
    if (hero.heroId == null){
      hero.heroId = 0;
    }
    this.heroService.CreateHero(hero).subscribe((data) => {
      this.router.navigate(['/hero'])
    });
  }
}
