import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SingUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sing-up',
  templateUrl: 'sing-up.html',
})
export class SingUpPage {
  username:string;
  password:string;
  repassword:string;
  loginResult;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingUpPage');
  }
  

  Cancel(){
    this.navCtrl.push(LoginPage);
  }

  register(_username){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);
    alert('Hello' + _username);
    if(this.username.length==0 || this.password.length==0 || this.password.length==0) {
      this.loginResult = 'Pass';
      this.navCtrl.push("LoginPage");
    } else {
      this.loginResult = 'Fall';
    }
  }
}