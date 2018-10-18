import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Imagen1Page } from '../imagen1/imagen1';
import { Biblio1Page } from '../biblio1/biblio1';
import { Tracks1Page } from '../tracks1/tracks1';
import { Reseñas1Page } from '../reseñas1/reseñas1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagen1 = Imagen1Page;
  biblio1 = Biblio1Page;
  tracks1 = Tracks1Page;
  reseñas1= Reseñas1Page;

  constructor(public navCtrl: NavController) {

  }

  imagenn1(){
    this.navCtrl.push(this.imagen1);
  }
  biblioo1(){
    this.navCtrl.push(this.biblio1);
  }
  x1(){
    this.navCtrl.push(this.tracks1);
  }
  rese1(){
    this.navCtrl.push(this.reseñas1);
  }

}
