import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';
import { Secret } from 'src/app/models/Secret';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-secret-form',
  templateUrl: './secret-form.component.html',
  styleUrls: ['./secret-form.component.css']
})
export class SecretFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Secret>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dados: Secret | null = null;

  heroes: Hero[] = [];
  secretForm!: FormGroup;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.secretForm = new FormGroup({
      name: new FormControl(this.dados ? this.dados.name : '',
        Validators.compose([
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
    this.onSubmit.emit(this.secretForm.value);
  }
}
