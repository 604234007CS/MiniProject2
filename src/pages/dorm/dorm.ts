import { RoomDetialPage } from './../room-detial/room-detial';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dorm',
  templateUrl: 'dorm.html',
})
export class DormPage {

  rentedroom: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public porm: LoaddataProvider) {
    this.loaddata();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DormPage');
  }

  loaddata(){
    this.porm.getDorm().subscribe(porms=>{
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
