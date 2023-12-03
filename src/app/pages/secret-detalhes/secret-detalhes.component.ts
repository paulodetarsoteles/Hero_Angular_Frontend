import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secret } from 'src/app/models/Secret';
import { SecretService } from 'src/app/service/secret.service';

@Component({
  selector: 'app-secret-detalhes',
  templateUrl: './secret-detalhes.component.html',
  styleUrls: ['./secret-detalhes.component.css']
})
export class SecretDetalhesComponent {

  secret?: Secret;

  constructor(private secretService: SecretService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.secretService.GetSecretById(id).subscribe((data) => {
      this.secret = data;
    });
  }
}
