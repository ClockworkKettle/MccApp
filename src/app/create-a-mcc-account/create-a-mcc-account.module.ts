import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateAMCCAccountPage } from './create-a-mcc-account.page';
import { SignupFormComponent } from '../Create a MCC Account/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAMCCAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateAMCCAccountPage, SignupFormComponent]
})
export class CreateAMCCAccountPageModule {}
