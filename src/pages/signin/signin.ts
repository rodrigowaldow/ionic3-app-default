import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';
import { SigninWithEmailPage } from '../signinwithemail/signinwithemail';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user = {} as User;

  @ViewChild('form') form: NgForm;
  
  constructor(
    private toastCtrl: ToastController,
    private authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  signInWithEmailPage() {
    this.navCtrl.push(SigninWithEmailPage);
  }

  /* signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        this.navCtrl.setRoot("HomePage");
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then(() => {
        this.navCtrl.setRoot("HomePage");
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then(() => {
        this.navCtrl.setRoot("HomePage");
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  } */

}
