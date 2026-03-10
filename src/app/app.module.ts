import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'sadri-mvp',
        appId: '1:510800181216:web:6b1b77d9691e18144c5d85',
        storageBucket: 'sadri-mvp.firebasestorage.app',
        apiKey: 'AIzaSyDPrQJ2O5Np0OFN3v7WrDknJxoxoDfGWpE',
        authDomain: 'sadri-mvp.firebaseapp.com',
        messagingSenderId: '510800181216',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
