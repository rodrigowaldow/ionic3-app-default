import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { firebase_config } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';

import { MovieProvider } from '../providers/movie/movie';
import { AuthService } from '../providers/auth/auth-service';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';

import { ConfigProvider } from '../providers/config/config';
import { SignupPage } from '../pages/signup/signup';
import { SigninWithEmailPage } from '../pages/signinwithemail/signinwithemail';
import { SigninPage } from '../pages/signin/signin';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebase_config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    ConfigProvider,
    AdMobFree
  ]
})
export class AppModule {}
