import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Secret } from 'src/app/models/Secret';
import { SecretService } from 'src/app/service/secret.service';

@Component({
  selector: 'app-secret-editar',
  templateUrl: './secret-editar.component.html',
  styleUrls: ['./secret-editar.component.css']
})
export class SecretEditarComponent {

  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar informações';
  secret!: Secret;

  constructor(private secretService: SecretService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.secretService.GetSecretById(id).subscribe((data) => {
      this.secret = data;
    })
  }
}
