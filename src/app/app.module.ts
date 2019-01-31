import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { RotaPage } from '../pages/rota/rota';
import { MembersPage } from '../pages/members/members';
import { AboutUsPage } from '../pages/about-us/about-us';
import { MembersLoginPage } from '../pages/members-login/members-login';
import { CreateAMCCAccountPage } from '../pages/create-amccaccount/create-amccaccount';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnnouncementsPage,
    RotaPage,
    MembersPage,
    AboutUsPage,
    MembersLoginPage,
    CreateAMCCAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnnouncementsPage,
    RotaPage,
    MembersPage,
    AboutUsPage,
    MembersLoginPage,
    CreateAMCCAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}