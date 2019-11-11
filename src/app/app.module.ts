import { VsroomPage } from './../pages/vsroom/vsroom';

import { RoomDetialPage } from './../pages/room-detial/room-detial';
import { InsertDormPage } from './../pages/insert-dorm/insert-dorm';



import { TypeRoomPage } from './../pages/type-room/type-room';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoaddataProvider } from '../providers/loaddata/loaddata';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TypeRoomPage,
    VsroomPage,
    InsertDormPage,RoomDetialPage
  
  ],  
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TypeRoomPage,
    VsroomPage,
    InsertDormPage,RoomDetialPage
    
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaddataProvider
  ]
})
export class AppModule {}
