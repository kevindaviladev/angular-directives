import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtributeComponent } from './directivas/atributo/atribute/atribute.component';
import { EstructuralesComponent } from './directivas/estructurales/estructurales/estructurales.component';

const routes: Routes = [
  { path: '', redirectTo: 'atributo', pathMatch: 'full' },
  { path: 'atributo', component: AtributeComponent },
  { path: 'estructurales', component: EstructuralesComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
