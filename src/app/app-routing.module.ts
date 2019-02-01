import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'announcements', loadChildren: './announcements/announcements.module#AnnouncementsPageModule' },
  { path: 'rota', loadChildren: './rota/rota.module#RotaPageModule' },
  { path: 'members', loadChildren: './members/members.module#MembersPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'members-login', loadChildren: './members-login/members-login.module#MembersLoginPageModule' },
  { path: 'create-a-mcc-account', loadChildren: './create-a-mcc-account/create-a-mcc-account.module#CreateAMCCAccountPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
