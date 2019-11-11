import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { RoomDetialPage } from './../room-detial/room-detial';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MansionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mansion',
  templateUrl: 'mansion.html',
})
export class MansionPage {
  [x: string]: any;
  rentedroom: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public porm: LoaddataProvider) {
  this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MansionPage');
  }
  loaddata(){
    this.porm.getMansion().subscribe(porms=>{
      this.rentedroom=porms;
      console.log(porms);
    });
  }
  getdetail(room){
    this.navCtrl.push(RoomDetialPage,room);
  }

  
  getItems(ev:any) {
    let val = ev.target.value;

    if (val != 0) {
      this.porm.searchrooms(val).subscribe(rooms => {
        this.rentedroom = rooms;
      });
    }else {
      this.loaddata();
  }
}
}
