import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Secret } from 'src/app/models/Secret';
import { SecretService } from 'src/app/service/secret.service';

@Component({
  selector: 'app-secret-cadastro',
  templateUrl: './secret-cadastro.component.html',
  styleUrls: ['./secret-cadastro.component.css']
})
export class SecretCadastroComponent {

  btnAcao: string = "Incluir";
  btnTitulo: string = "Cadastrar nova identidade secreta";

  constructor(private secretService: SecretService, private router: Router){ }

  createSecret(secret: Secret): void {
    if (secret.secretId == null){
      secret.secretId = 0;
    }
    this.secretService.CreateSecret(secret).subscribe((data) => {
      this.router.navigate(['/secret'])
    });
  }
}
