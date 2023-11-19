import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-editar',
  templateUrl: './hero-editar.component.html',
  styleUrls: ['./hero-editar.component.css']
})
export class HeroEditarComponent implements OnInit {

  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar informações';
  hero!: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.GetHeroById(id).subscribe((data) => {
      this.hero = data;
    })
  }

  editHero(hero: Hero): void {

  }
}
