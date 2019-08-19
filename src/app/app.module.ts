import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

firebase.initializeApp({
  apiKey: "AIzaSyAzyuREV9nckgCxOqyE7C11SCb1H4a1p4I",
  authDomain: "fitnessstudio-ea8b9.firebaseapp.com",
  databaseURL: "https://fitnessstudio-ea8b9.firebaseio.com",
  projectId: "fitnessstudio-ea8b9",
  storageBucket: "fitnessstudio-ea8b9.appspot.com",
  messagingSenderId: "658634386672",
  appId: "1:658634386672:web:f16116047bbfa049"
});

firebase.firestore().settings({
  timestampsInSnapshots: true
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
