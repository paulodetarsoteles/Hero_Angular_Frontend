import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { SecretComponent } from './pages/secret/secret.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HeroCadastroComponent } from './pages/hero-cadastro/hero-cadastro.component';
import { WeaponCadastroComponent } from './pages/weapon-cadastro/weapon-cadastro.component';
import { SecretCadastroComponent } from './pages/secret-cadastro/secret-cadastro.component';
import { MovieCadastroComponent } from './pages/movie-cadastro/movie-cadastro.component';
import { HeroEditarComponent } from './pages/hero-editar/hero-editar.component';
import { WeaponEditarComponent } from './pages/weapon-editar/weapon-editar.component';
import { SecretEditarComponent } from './pages/secret-editar/secret-editar.component';
import { MovieEditarComponent } from './pages/movie-editar/movie-editar.component';
import { HeroDetalhesComponent } from './pages/hero-detalhes/hero-detalhes.component';
import { WeaponDetalhesComponent } from './pages/weapon-detalhes/weapon-detalhes.component';
import { SecretDetalhesComponent } from './pages/secret-detalhes/secret-detalhes.component';
import { MovieDetalhesComponent } from './pages/movie-detalhes/movie-detalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'hero-cadastro', component: HeroCadastroComponent },
  { path: 'hero-editar/:id', component: HeroEditarComponent },
  { path: 'hero-detalhes/:id', component: HeroDetalhesComponent },
  { path: 'weapon', component: WeaponComponent },
  { path: 'weapon-cadastro', component: WeaponCadastroComponent },
  { path: 'weapon-editar/:id', component: WeaponEditarComponent },
  { path: 'weapon-detalhes/:id', component: WeaponDetalhesComponent },
  { path: 'secret', component: SecretComponent },
  { path: 'secret-cadastro', component: SecretCadastroComponent },
  { path: 'secret-editar/:id', component: SecretEditarComponent },
  { path: 'secret-detalhes/:id', component: SecretDetalhesComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie-cadastro', component: MovieCadastroComponent },
  { path: 'movie-editar/:id', component: MovieEditarComponent },
  { path: 'movie-detalhes/:id', component: MovieDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
