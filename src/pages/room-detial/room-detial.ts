import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomDetialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-detial',
  templateUrl: 'room-detial.html',
})
export class RoomDetialPage {
  roomdata:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetialPage');
    this.roomdata = this.navParams.data;
    console.log(this.roomdata);
  }


  
}
