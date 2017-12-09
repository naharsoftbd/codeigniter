import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    resposeData : any;
    userData = {"user_id": "","email":"", "password":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(){
   if(this.userData.email && this.userData.password){
    this.authService.postData(this.userData,'user/signin/').then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
    if(this.resposeData){
     localStorage.setItem('userData', JSON.stringify(this.resposeData) )
    this.navCtrl.push(HomePage);
  }
  else{
    this.presentToast("Please give valid username and password");
  }
      }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.presentToast("Give username and password");
   }
  
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
