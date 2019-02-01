import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MembersLoginPage } from './members-login.page';
import { LoginFormComponent } from '../Members Login/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: MembersLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MembersLoginPage, LoginFormComponent]
})
export class MembersLoginPageModule {}
