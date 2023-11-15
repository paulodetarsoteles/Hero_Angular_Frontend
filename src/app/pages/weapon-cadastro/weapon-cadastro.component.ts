import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Weapon } from 'src/app/models/Weapon';
import { WeaponService } from 'src/app/service/weapon.service';

@Component({
  selector: 'app-weapon-cadastro',
  templateUrl: './weapon-cadastro.component.html',
  styleUrls: ['./weapon-cadastro.component.css']
})
export class WeaponCadastroComponent {

  constructor(private weaponService: WeaponService, private router: Router){ }

  createWeapon(weapon: Weapon): void {
    this.weaponService.CreateWeapon(weapon).subscribe((data) => {
      this.router.navigate(['/weapon'])
    });
  }
}
