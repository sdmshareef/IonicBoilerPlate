import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MapsProvider provider.
*/
@Injectable()
export class MapsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MapsProvider Provider');
  }

}
