import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'verifyotp', loadChildren: './verifyotp/verifyotp.module#VerifyotpPageModule' },
  { path: 'memorandum', loadChildren: './memorandum/memorandum.module#MemorandumPageModule' },
  { path: 'bankdetail', loadChildren: './bankdetail/bankdetail.module#BankdetailPageModule' },
  { path: 'home-menu', loadChildren: './home-menu/home-menu.module#HomeMenuPageModule' },
  { path: 'add-dates', loadChildren: './add-dates/add-dates.module#AddDatesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
