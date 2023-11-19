import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Hero>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dados: Hero | null = null;

  heroForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      heroId: new FormControl(this.dados ? this.dados.heroId : null),
      name: new FormControl(this.dados ? this.dados.name : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30)
        ])
      ),
      active: new FormControl(this.dados ? this.dados.active : false,
        Validators.required)
    });
  }

  submit(): void {
    this.onSubmit.emit(this.heroForm.value);
  }
}
