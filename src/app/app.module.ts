import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { SecretComponent } from './pages/secret/secret.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HeroCadastroComponent } from './pages/hero-cadastro/hero-cadastro.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { SecretFormComponent } from './components/secret-form/secret-form.component';
import { WeaponFormComponent } from './components/weapon-form/weapon-form.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieCadastroComponent } from './pages/movie-cadastro/movie-cadastro.component';
import { WeaponCadastroComponent } from './pages/weapon-cadastro/weapon-cadastro.component';
import { SecretCadastroComponent } from './pages/secret-cadastro/secret-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    WeaponComponent,
    SecretComponent,
    MovieComponent,
    HeroCadastroComponent,
    HeroFormComponent,
    SecretFormComponent,
    WeaponFormComponent,
    MovieFormComponent,
    MovieCadastroComponent,
    WeaponCadastroComponent,
    SecretCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
