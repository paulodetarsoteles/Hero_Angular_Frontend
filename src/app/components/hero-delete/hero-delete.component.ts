import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-delete',
  templateUrl: './hero-delete.component.html',
  styleUrls: ['./hero-delete.component.css']
})
export class HeroDeleteComponent {

  inputData: any;
  hero!: Hero;

  constructor(private heroService: HeroService, private router: Router, private ref: MatDialogRef<HeroDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.inputData = this.data;
    this.heroService.GetHeroById(this.inputData.id).subscribe((hero) => {
      this.hero = hero;
    });
  }

  delete(): void {
    this.heroService.DeleteHero(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }
}
