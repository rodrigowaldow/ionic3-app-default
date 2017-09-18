import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthService } from '../../providers/auth/auth-service';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-signin-with-email',
    templateUrl: 'signinwithemail.html',
})
export class SigninWithEmailPage {

  user = {} as User;

  @ViewChild('form') form: NgForm;
  
  constructor(
    private afAuth: AuthService,
    private toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  login(){
    if (this.form.form.valid) {
      this.afAuth.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(HomePage)
        })
        .catch((error: any) => {
          let toast = this.toast.create({
            duration: 3000,
            position: 'bottom'
          });

          if (error.code == 'auth/invalid-email') {
            toast.setMessage("Email address is not valid.");
          }
          else if (error.code == 'auth/user-disabled') {
            toast.setMessage("User corresponding to the given email has been disabled.");
          }
          else if (error.code == 'auth/user-not-found') {
            toast.setMessage("There is no user corresponding to the given email.");
          }
          else if (error.code == 'auth/wrong-password') {
            toast.setMessage("Password is invalid for the given email, or the account corresponding to the email does not have a password set.");
          }
          else
            toast.setMessage(error.message);

          toast.present();
        })
    }
  }

  register(){
    this.navCtrl.push(SignupPage);
  }

  resetPassword() {
    this.navCtrl.push(ResetpasswordPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
