import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ReadModuleModule } from './read-module/read-module.module';
import { ReadComponent } from './read-module/read/read.component';

//const routes: Routes = [{path:'read', loadChildren: async () => (await import('./read-module/read-module.module')).ReadModuleModule}];
const routes: Routes =[{
  path:"read",
  component:ReadComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
