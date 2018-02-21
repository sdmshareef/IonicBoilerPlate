import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { LocationTrackerProvider } from "./../../providers/location-tracker/location-tracker";

@Component({
  selector: 'page-home',
  templateUrl: 'matches.html'
})
export class MatchesPage implements OnInit {
  public title = 'Cric24by7';
  public items:any = [];
  public loader = 'Loading...';
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public locationProvider: LocationTrackerProvider) {

  }
  ngOnInit() {
   
  }
  
}
