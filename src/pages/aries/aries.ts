import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the AriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-aries',
  templateUrl: 'aries.html',
})
export class AriesPage {
  todayHoroscope: Observable<any>; todayDesc: any; todayDesc2: any; todayDesc3: any;
  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500,
    });
    loader.present();
  }

  showAlert() {
    this.presentLoading();
    this.todayHoroscope = this.http.get('https://horoscope-api.herokuapp.com/horoscope/today/Aries');
    this.todayHoroscope.subscribe(data => {
      this.todayDesc = data.horoscope;
      const alert = this.alertCtrl.create({
        title: 'Today',
        message: this.todayDesc,
        cssClass: 'scrollContent',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  showAlert2() {
    this.presentLoading();
    this.todayHoroscope = this.http.get('https://horoscope-api.herokuapp.com/horoscope/week/Aries');
    this.todayHoroscope.subscribe(data2 => {
      this.todayDesc2 = data2.horoscope;
      const alert = this.alertCtrl.create({
        title: 'This Week',
        subTitle: this.todayDesc2,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  showAlert3() {
    this.presentLoading();
    this.todayHoroscope = this.http.get('https://horoscope-api.herokuapp.com/horoscope/month/Aries');
    this.todayHoroscope.subscribe(data3 => {
      this.todayDesc3 = data3.horoscope;
      const alert = this.alertCtrl.create({
        title: 'This Month',
        subTitle: this.todayDesc3,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AriesPage');
  }

}
