import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotolistComponent } from './fotolist/fotolist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home' ,component:HomeComponent },
  {path: 'fotolist', component: FotolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
