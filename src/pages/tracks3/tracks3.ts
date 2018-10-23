import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks3',
  templateUrl: 'tracks3.html',
})
export class Tracks3Page {
  tracks3 = [
    "Stargazing 3:57",
    
    "It Ain't Me 3:41",
    
    "First Time 3:14",
    
    "This Town (feat. Sasha Sloan) 3:22",
    
    "You're the Best Thing About Me 4:18"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks3Page');
  }

}
