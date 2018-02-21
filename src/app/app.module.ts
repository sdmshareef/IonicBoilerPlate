import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { AddDataPageModule } from './../pages/add-data/add-data.module';
import { EditDataPageModule } from './../pages/edit-data/edit-data.module';
import { TabsPage, ModalContentPage } from './../pages/tabs/tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MatchesPage } from '../pages/matches/matches';
import { SignupPage } from '../pages/signup/signup';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { LocationProvider } from '../providers/location/location';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsProvider } from '../providers/maps/maps';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import {BackgroundGeolocation} from '@ionic-native/background-geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ModalContentPage,
    SignupPage,
    MatchesPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    AddDataPageModule,
    EditDataPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    NewsPage,
    MatchesPage,
    SignupPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    SQLite,
    Toast,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    LocationProvider,
    MapsProvider,
    LocationTrackerProvider
  ]
})
export class AppModule {}
