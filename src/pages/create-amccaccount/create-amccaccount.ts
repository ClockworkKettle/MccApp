import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembersPage } from '../members/members';

@Component({
  selector: 'page-create-amccaccount',
  templateUrl: 'create-amccaccount.html'
})
export class CreateAMCCAccountPage {

  constructor(public navCtrl: NavController) {
  }
  goToMembers(params){
    if (!params) params = {};
    this.navCtrl.push(MembersPage);
  }
}
