import { Component, OnInit } from '@angular/core';
import { Secret } from 'src/app/models/Secret';
import { SecretService } from 'src/app/service/secret.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent {

  secrets: Secret[] = [];
  secretsGeral: Secret[] = [];
  columns: String[] = ["Código", "Nome", "Herói", "Opções"];

  constructor(private secretService: SecretService){ }

  ngOnInit(): void {
    this.secretService.GetSecrets().subscribe(data => {
      this.secrets = data;
      this.secretsGeral = data;
    });
  }

  searchSecret(event: Event): void{
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    this.secrets = this.secretsGeral.filter(secret => {
      return secret.name.toLowerCase().includes(value);
    });
  }
}
