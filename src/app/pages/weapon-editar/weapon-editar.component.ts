import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weapon } from 'src/app/models/Weapon';
import { WeaponService } from 'src/app/service/weapon.service';

@Component({
  selector: 'app-weapon-editar',
  templateUrl: './weapon-editar.component.html',
  styleUrls: ['./weapon-editar.component.css']
})
export class WeaponEditarComponent {

  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar informações';
  weapon!: Weapon;

  constructor(private weaponService: WeaponService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.weaponService.GetWeaponById(id).subscribe((data) => {
      this.weapon = data;
    })
  }

  editWeapon(weapon: Weapon): void {

  }
}
