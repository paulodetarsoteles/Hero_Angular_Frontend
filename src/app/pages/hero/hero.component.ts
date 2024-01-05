import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeroDeleteComponent } from 'src/app/components/hero-delete/hero-delete.component';
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
  columns: string[] = ['Ativo', 'Código', 'Nome', 'Última Atualização', 'Opções'];

  constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.heroService.GetHeroes().subscribe(data => {
      const dataHero = data;

      dataHero.map((item) => {
        item.updateDate = new Date(item.updateDate!).toLocaleDateString('pt-BR');
      });

      this.heroes = dataHero;
      this.heroesGeneral = dataHero;
    });
  }

  searchHero(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    this.heroes = this.heroesGeneral.filter(hero => {
      return hero.name.toLowerCase().includes(value);
    });
  }

  openDialog(id: number): void {
    this.dialog.open(HeroDeleteComponent, {
      width: '360px',
      height: '180px',
      data: {
        id: id
      }
    });
  }
}
