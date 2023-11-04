import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { SecretComponent } from './pages/secret/secret.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'weapon', component: WeaponComponent },
  { path: 'secret', component: SecretComponent },
  { path: 'movie', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
