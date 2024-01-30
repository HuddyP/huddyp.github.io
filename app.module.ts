import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadshotComponent } from 'src/app/headshot/headshot.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutMeComponent } from 'src/app/webpages/about-me/about-me.component';
import { MyProjectsComponent } from 'src/app/webpages/my-projects/my-projects.component';
import { ContactMeComponent } from 'src/app/webpages/contact-me/contact-me.component';
import { FooterBarComponent } from 'src/app/footer-bar/footer-bar.component';
import { AudioPlayerComponent } from 'src/app/audio-player/audio-player.component';
import { AudioFabComponent } from 'src/app/audio-fab/audio-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadshotComponent,
    NavbarComponent,
    MyProjectsComponent,
    ContactMeComponent,
    FooterBarComponent,
    AudioPlayerComponent,
    AudioFabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    AboutMeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
