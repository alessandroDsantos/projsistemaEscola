import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1CursoComponent } from './view1-curso/view1-curso.component';
import { View2IncluirComponent } from './view2-incluir/view2-incluir.component';

const routes: Routes = [
  { path: "view1curso", component: View1CursoComponent},
  { path: "view2incluir", component: View2IncluirComponent},
  { path: "**", redirectTo:"/view1curso"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
