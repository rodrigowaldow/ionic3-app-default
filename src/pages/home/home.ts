import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../providers/auth/auth-service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: FirebaseObjectObservable<Profile>;

  constructor(
    private adMobFree: AdMobFree,
    private afAuth: AuthService,
    private afDataBase: AngularFireDatabase,
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.showBannerAd();
    //this.showInterstitialAd();
    this.showVideoRewardsAd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    /* this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bem Vindo ao APP_NAME, ${data.email}`,
          duration: 3000
        }).present();

        this.profileData = this.afDataBase.object(`profile/${data.uid}`)
      }
      else {
        this.toast.create({
          message: `Não foi possível realizar a autenticação.`,
          duration: 3000
        }).present();
      }
    }); */
  }

  signOut() {
    this.afAuth.signOutFirebase()
      .then(() => {
        this.navCtrl.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
    })
  }

  async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-2394100914911152/6461324312',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.banner.config(bannerConfig);

      const result = await this.adMobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        });
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-2394100914911152/2234073180',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.interstitial.config(interstitialConfig);

      const result = await this.adMobFree.interstitial.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e)
    }
  }

  async showVideoRewardsAd() {
    try {
      const videoRewardsConfig: AdMobFreeRewardVideoConfig = {
        id: 'ca-app-pub-2394100914911152/4656400007',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.rewardVideo.config(videoRewardsConfig);

      const result = await this.adMobFree.rewardVideo.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }
}
