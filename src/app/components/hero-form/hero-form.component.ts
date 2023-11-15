import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Hero>();

  heroForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      active: new FormControl(false, [Validators.required]),
      updateDate: new FormControl(new Date)
    });
  }

  submit(): void {
    this.onSubmit.emit(this.heroForm.value);
  }
}
