import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weapon } from 'src/app/models/Weapon';
import { WeaponService } from 'src/app/service/weapon.service';

@Component({
  selector: 'app-weapon-detalhes',
  templateUrl: './weapon-detalhes.component.html',
  styleUrls: ['./weapon-detalhes.component.css']
})
export class WeaponDetalhesComponent {

  weapon?: Weapon;

  constructor(private weaponService: WeaponService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.weaponService.GetWeaponById(id).subscribe((data) => {
      this.weapon = data;
    });
  }
}
