import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicIndexComponentComponent } from './Components/dynamic-index-component/dynamic-index-component.component';
import { DynamicComponent } from './Components/dynamic/dynamic.component';

const routes: Routes = [
  {path:'addedit',component:DynamicComponent},
  {path: 'index', component: DynamicIndexComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
