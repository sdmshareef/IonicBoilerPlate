import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Geolocation]
})
export class HomePage implements OnInit{
  public lat = 456;
  public lng = 123
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public geolocation: Geolocation,
    public toastCtrl: ToastController
  ) {
  }
  async ionViewWillEnter(){
    let res = await this.geolocation.getCurrentPosition()
    let toast = this.toastCtrl.create({
      message: '"'+res.coords.latitude+' Test Message',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  async ngOnInit(){
    let toast = this.toastCtrl.create({
      message: 'ngOninit',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    let res = await this.geolocation.getCurrentPosition()
    this.lat = res.coords.latitude;
    this.lng = res.coords.longitude;
  }
  loadMap(lat, lng) {
      // this.map = new google.maps.Map(document.getElementById("map"), {
      //   center: new google.maps.LatLng(lat, lng),
      //   zoom: 15,
      //   mapTypeId: google.maps.MapTypeId.ROADMAP
      // });
  }
}