import { Http } from '@angular/http';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VsroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vsroom',
  templateUrl: 'vsroom.html',
})
export class VsroomPage {

  rerult:any={};
  value:any={};
  showroom1:any=[];
  showroom2:any=[];



  constructor(public navCtrl: NavController, public navParams: NavParams, public keyapi:LoaddataProvider ,public Http:Http) {
     this.rerult.room1 ="";
    this.rerult.room2 =""; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VsroomPage');
     this.keyapi.loadrooms().subscribe(data=>{
      this.value = data;
    }); 
  }

   getroomview(){
    if(this.rerult.room1 != ""){
      this.keyapi.showroom(this.rerult.room1).subscribe(data=>{
        this.showroom1 = data;
      console.log(this.showroom1);
    });
  } 

  if(this.rerult.room2 != ""){
    this.keyapi.showroom(this.rerult.room2).subscribe(data=>{
      this.showroom2 = data;
    console.log(this.showroom2);
  });
} 

} 


}
