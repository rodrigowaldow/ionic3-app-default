import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers:[
    MovieProvider
  ]
})
export class FeedPage {
  public object_feed = {
    title: "Rodrigo Waldow",
    date: "Setember 9, 20117",
    description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean? Whoa. This is heavy.",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment:"11h ago"
  }

  public list_movies = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  /**
   * getLikes
   */
  public getLikes(count_likes:number):void {
    alert("Call Function getLikes(): " + count_likes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        
        const response = (data as any)
        const object = JSON.parse(response._body);
        this.list_movies = object.results;

        console.log(object)
      }, error => {
        console.log(error)
      }
    );
  }

}
