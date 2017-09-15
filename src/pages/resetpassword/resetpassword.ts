import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  userEmail: string = '';

  @ViewChild('form') form: NgForm;

  constructor(
    private afAuth: AuthService,
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

  resetPassword() {
    if (this.form.form.valid) {
      let toast = this.toast.create({
        duration: 3000,
        position: 'bottom'
      });

      this.afAuth.resetPassword(this.userEmail)
        .then(() => {
          toast.setMessage("Your request has been sent by e-mail.").present();

          this.navCtrl.pop();
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            toast.setMessage("Email address is not valid.");
          }
          else if (error.code == 'auth/user-not-found') {
            toast.setMessage("There is no user corresponding to the given email.");
          }
          else
            toast.setMessage(error.message);

          toast.present();
        })
    }
  }

}
