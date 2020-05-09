import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilPage } from 'src/app/pages/accueil/accueil.page';
import { MapComponent } from './map/map.component';

const routes: Routes = [{ path: 'accueil', component: AccueilPage },
{ path: 'map', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
