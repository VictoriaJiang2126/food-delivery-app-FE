import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'restaurant-listing', pathMatch: 'full' }
];

// 表示当用户访问应用的根 URL（即没有任何额外路径的 URL）时，
// 应用将自动重定向到 /restaurant-listing。

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


