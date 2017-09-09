import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public user_name:string = "Rodrigo Waldow";
  //public count_likes:number = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * getLikes
   */
  public getLikes(count_likes:number):void {
    alert("Call Function getLikes(): " + count_likes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.getLikes(3);
  }

}
