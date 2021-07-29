import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TestComponent } from './test/test.component';


const routes: Routes = [
    {
        path: "first",
        loadChildren: "./first/first.module#FirstModule"
      },
      {
        path:"test",
        component:TestComponent
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
