import { Component, ViewChild  } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, MenuController, Nav , App, } from 'ionic-angular';

import { Welcome } from '../pages/welcome/welcome';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Welcome;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public app: App, public menu: MenuController,) {
     this.initializeApp();
  }
   initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
   backToWelcome(){
   const root = this.app.getRootNav();
    root.popToRoot();
  }

 logout(){
    //Api Token Logout 
    
    localStorage.clear();
    this.menu.enable(false);
     setTimeout(()=> this.backToWelcome(), 1000);
    
  }
}

