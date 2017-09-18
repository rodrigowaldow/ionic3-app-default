import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConfigProvider } from '../providers/config/config';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider,
    afAuth: AngularFireAuth
  ) {
    const authObserver = afAuth.authState.subscribe(user => {
      if(user) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = SigninPage;
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      /* let config = configProvider.getConfigData();
      if(config == null){
        this.rootPage = "IntroPage";
        configProvider.setConfiData(false);
      }else{
        this.rootPage = "TabsPage";
      }

      console.log(config); */

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
