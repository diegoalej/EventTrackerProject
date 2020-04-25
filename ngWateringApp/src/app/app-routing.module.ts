import { WateringComponent } from './components/watering/watering.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: WateringComponent},
  {path: 'waterings', component: WateringComponent},
  {path: 'waterings/:id', component: WateringComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
