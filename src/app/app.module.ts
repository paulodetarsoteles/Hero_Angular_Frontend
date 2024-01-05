import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { HeroEditarComponent } from './pages/hero-editar/hero-editar.component';
import { MovieEditarComponent } from './pages/movie-editar/movie-editar.component';
import { SecretEditarComponent } from './pages/secret-editar/secret-editar.component';
import { WeaponEditarComponent } from './pages/weapon-editar/weapon-editar.component';
import { HeroDetalhesComponent } from './pages/hero-detalhes/hero-detalhes.component';
import { MovieDetalhesComponent } from './pages/movie-detalhes/movie-detalhes.component';
import { SecretDetalhesComponent } from './pages/secret-detalhes/secret-detalhes.component';
import { WeaponDetalhesComponent } from './pages/weapon-detalhes/weapon-detalhes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeroDeleteComponent } from './components/hero-delete/hero-delete.component';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';
import { SecretDeleteComponent } from './components/secret-delete/secret-delete.component';
import { WeaponDeleteComponent } from './components/weapon-delete/weapon-delete.component';

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
    SecretCadastroComponent,
    HeroEditarComponent,
    MovieEditarComponent,
    SecretEditarComponent,
    WeaponEditarComponent,
    HeroDetalhesComponent,
    MovieDetalhesComponent,
    SecretDetalhesComponent,
    WeaponDetalhesComponent,
    HeroDeleteComponent,
    MovieDeleteComponent,
    SecretDeleteComponent,
    WeaponDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
