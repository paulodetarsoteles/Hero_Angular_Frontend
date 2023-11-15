import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Output() onSubmit = new EventEmitter<Secret>();

  heroes: Hero[] = [];
  secretForm!: FormGroup;

  constructor(private heroService: HeroService, private secretService: SecretService) { }

  ngOnInit(): void {
    this.secretForm = new FormGroup({
      name: new FormControl(
        '', Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30)
        ])
      ),
      hero: new FormControl('', [Validators.required])
    });

    this.heroService.GetHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  submit(): void {
    this.onSubmit.emit(this.secretForm.value);
  }
}
