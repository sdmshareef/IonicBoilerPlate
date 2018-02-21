import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the LocationProvider provider.
*/
@Injectable()
export class LocationProvider {   

  constructor(public http: HttpClient, public geoLocation: Geolocation) {}

  getMyCurrentLocation(){
    return new Promise( (resolve, reject) =>{
      this.geoLocation.getCurrentPosition().then((resp) => {
        resolve([resp.coords.latitude,resp.coords.longitude])
       }).catch((error) => {
         reject(error);
       });
    })
  }

}
