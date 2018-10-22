import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Imagen1Page } from '../pages/imagen1/imagen1';
import { Biblio1Page } from '../pages/biblio1/biblio1';
import { Reseñas1Page } from '../pages/reseñas1/reseñas1';
import { Tracks1Page } from '../pages/tracks1/tracks1';
import { Tracks2Page } from '../pages/tracks2/tracks2';
import { Reseña2Page } from '../pages/reseña2/reseña2';
import { Bio2Page } from '../pages/bio2/bio2';
import { Imagen2Page } from '../pages/imagen2/imagen2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Imagen1Page,
    Biblio1Page,
    Reseñas1Page,
    Tracks1Page,
    Tracks2Page,
    Reseña2Page,
    Bio2Page,
    Imagen2Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Imagen1Page,
    Biblio1Page,
    Reseñas1Page,
    Tracks1Page,
    Tracks2Page,
    Reseña2Page,
    Bio2Page,
    Imagen2Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
