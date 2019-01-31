import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembersPage } from '../members/members';
import { CreateAMCCAccountPage } from '../create-amccaccount/create-amccaccount';

@Component({
  selector: 'page-members-login',
  templateUrl: 'members-login.html'
})
export class MembersLoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToMembers(params){
    if (!params) params = {};
    this.navCtrl.push(MembersPage);
  }goToCreateAMCCAccount(params){
    if (!params) params = {};
    this.navCtrl.push(CreateAMCCAccountPage);
  }
}
