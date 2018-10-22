import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks1',
  templateUrl: 'tracks1.html',
})
export class Tracks1Page {

  tracks1 = [" One 4:13","I’m a Mess 4:05", "Sing 3:55","Don't 3:39","Nina 3:46", "Photograph 4:18",
  "Bloodstream 5:00",
  "Tenerife Sea 4:01",
  "Runaway 3:25",
  "The Man 4:10",
  "Thinking Out Loud 4:41",
  "Afire Love 5:14",
  "Take It Back 3:28",
  "Shirtsleeves 3:10",
  "Even My Dad Does Sometimes 3:49",
  "I See Fire 4:58",
  "All of the Stars 3:55"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks1Page');
  }

}
