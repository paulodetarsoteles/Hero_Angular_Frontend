import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';
import { Weapon } from 'src/app/models/Weapon';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.css']
})
export class WeaponFormComponent {
  @Output() onSubmit = new EventEmitter<Weapon>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dados: Weapon | null = null;

  heroes: Hero[] = [];
  weaponForm!: FormGroup;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.weaponForm = new FormGroup({
      name: new FormControl(
        '', Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30)
        ])
      ),
      hero: new FormControl(null)
    });

    this.heroService.GetHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  submit(): void {
    this.onSubmit.emit(this.weaponForm.value);
  }
}
