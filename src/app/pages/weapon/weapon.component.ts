import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/models/Weapon';
import { WeaponService } from 'src/app/service/weapon.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent {

  weapons: Weapon[] = [];
  weaponsGeral: Weapon[] = [];
  columns: String[] = ["Código", "Nome", "Herói", "Opções"];

  constructor(private weaponService: WeaponService){ }

  ngOnInit(): void{
    this.weaponService.GetWeapons().subscribe(data => {
      this.weapons = data;
      this.weaponsGeral = data;
    });
  }

  searchWeapon(event: Event): void{
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    this.weapons = this.weaponsGeral.filter(weapon => {
      return weapon.name.toLowerCase().includes(value);
    });
  }
}
