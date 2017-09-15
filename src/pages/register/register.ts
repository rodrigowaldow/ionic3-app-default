import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  user = {} as User;
  
  @ViewChild('form') form: NgForm;

  constructor(
    private afAuth: AuthService,
    private toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  async createAccount() {
    if (this.form.form.valid) {
      let toast = this.toast.create({
        duration: 3000,
        position: 'bottom'
      });

      await this.afAuth.createUser(this.user)
        .then((user: any) => {
          user.sendEmailVerification();

          toast.setMessage("User successfully created.").present();

          this.navCtrl.setRoot("HomePage");
        })
        .catch((error: any) => {
          if (error.code == 'auth/email-already-in-use'){
            toast.setMessage("Already exists an account with the given email address.");
          }
          else if (error.code == 'auth/invalid-email') {
            toast.setMessage("Email address is not valid.");
          }
          else if (error.code == 'auth/operation-not-allowed') {
            toast.setMessage("Email or password accounts are not enabled.");
          }
          else if (error.code == 'auth/weak-password') {
            toast.setMessage("Password is not strong enough.");
          }
          else
            toast.setMessage(error.message);

          toast.present()
        })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
