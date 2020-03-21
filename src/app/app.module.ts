import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// ajout du module firebase
import {AngularFireModule} from '@angular/fire';

// ajout d'un module du firestore (database)
import { AngularFirestoreModule } from "@angular/fire/firestore";

// ajout module authentification
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AngularFireStorageModule } from "@angular/fire/storage";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GoodsComponent,
    CartComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    // ajout configuration du firebase
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBA8O4kbhUJ0qpMTDuYynQy_1ZLI_ApxYg",
      authDomain: "ecommerce-59bbe.firebaseapp.com",
      databaseURL: "https://ecommerce-59bbe.firebaseio.com",
      projectId: "ecommerce-59bbe",
      storageBucket: "ecommerce-59bbe.appspot.com",
      messagingSenderId: "850517135802",
      appId: "1:850517135802:web:5249cf8b0e6e996ae20d83",
      measurementId: "G-RRTQYQJ3K8"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
