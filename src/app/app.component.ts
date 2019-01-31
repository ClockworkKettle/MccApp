import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { RotaPage } from '../pages/rota/rota';
import { AboutUsPage } from '../pages/about-us/about-us';
import { MembersLoginPage } from '../pages/members-login/members-login';
import { MembersPage } from '../pages/members/members';
import { CreateAMCCAccountPage } from '../pages/create-amccaccount/create-amccaccount';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToAnnouncements(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnnouncementsPage);
  }goToRota(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RotaPage);
  }goToAboutUs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutUsPage);
  }goToMembersLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MembersLoginPage);
  }goToMembers(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MembersPage);
  }goToCreateAMCCAccount(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CreateAMCCAccountPage);
  }
}
