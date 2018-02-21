import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';

@Injectable()
export class DatabaseProvider {
  
  public db = null;

  constructor(public http: HttpClient, private sqlite: SQLite, public toastCtrl: ToastController) {
    this.sqlite.create({
      name: 'tracker.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      db.executeSql('CREATE TABLE IF NOT EXISTS locations(id INTEGER PRIMARY KEY, lat STRING, lng STRING, location STRING, createdAt DATE)', {})
      .then(res => {
        this.toast('Table Created Successfully.')
      })
    });
  }
  addLocation(sql, values){
    this.db.executeSql(sql, values)
    .then( res => {
      this.toast('Location Added Successfully')
    })
  }
  toast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
