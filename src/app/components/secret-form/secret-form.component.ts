import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { Secret } from 'src/app/models/Secret';
import { HeroService } from 'src/app/service/hero.service';
import { SecretService } from 'src/app/service/secret.service';

@Component({
  selector: 'app-secret-form',
  templateUrl: './secret-form.component.html',
  styleUrls: ['./secret-form.component.css']
})
export class SecretFormComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private secretService: SecretService) { }

  ngOnInit(): void {
    this.heroService.GetHeroes().subscribe(data => {
      this.heroes = data;
    });
  }
}
