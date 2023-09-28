import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './webpages/home/home.component';
import { AboutMeComponent } from './webpages/about-me/about-me.component';
import { MyProjectsComponent } from './webpages/my-projects/my-projects.component';
import { ContactMeComponent } from './webpages/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'myprojects', component: MyProjectsComponent },
  { path: 'contactme', component: ContactMeComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
