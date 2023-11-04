import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[] = [];
  heroesGeneral: Hero[] = [];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.heroService.GetHeroes().subscribe(data => {
      console.log(data);
    });
  }

}
