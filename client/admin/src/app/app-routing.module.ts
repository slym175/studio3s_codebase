import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from "./components/errors/page404/page404.component";
import { Page500Component } from "./components/errors/page500/page500.component";
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '500',
    component: Page500Component
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: []
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
