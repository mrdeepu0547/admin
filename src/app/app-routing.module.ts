import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PsHomeComponent } from './ps-home/ps-home.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {path: ' ',component:AppComponent},
  {path: 'home',component:PsHomeComponent},
  {path: 'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
