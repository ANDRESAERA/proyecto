import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks4',
  templateUrl: 'tracks4.html',
})
export class Tracks4Page {
  tracks4 = [
    "Cloud 9 3:14",
    
    "That's What It Takes 4:01",
    
    "Fish on the Sand",
    
    "Just for Today 4:06",
    
    "This Is Love  3:49",
    
    "When We Was Fab 3:57",
    
    "Devil's Radio 3:54",
    
    "Someplace Else 3:53",
    
    "Wreck of the Hesperus",
    
    "Breath Away From Heaven 3:36",
    
    "Got My Mind Set on You  3:51"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks4Page');
  }

}
