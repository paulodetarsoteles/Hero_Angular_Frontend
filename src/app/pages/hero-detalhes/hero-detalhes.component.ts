import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-detalhes',
  templateUrl: './hero-detalhes.component.html',
  styleUrls: ['./hero-detalhes.component.css']
})
export class HeroDetalhesComponent implements OnInit {

  hero?: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.GetHeroById(id).subscribe((data) => {

      const dados = data;

      dados.updateDate = new Date(dados.updateDate).toLocaleDateString('pt-BR');

      this.hero = dados;
    });
  }
}
