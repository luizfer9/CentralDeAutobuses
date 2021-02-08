import { AutobusesComponent } from './autobuses/autobuses.component';
import { CentralesComponent } from './centrales/centrales.component';
import { ChoferesComponent } from './choferes/choferes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'centrales',
    component: CentralesComponent
  },
  {
    path: 'autobuses',
    component: AutobusesComponent
  },
  {
    path: 'choferes',
    component: ChoferesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
