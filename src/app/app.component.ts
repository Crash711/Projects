import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AriesPage } from '../pages/aries/aries';
import { TaurusPage } from '../pages/taurus/taurus';
import { GeminiPage } from '../pages/gemini/gemini';
import { CancerPage } from '../pages/cancer/cancer';
import { LeoPage } from '../pages/leo/leo';
import { VirgoPage } from '../pages/virgo/virgo';
import { LibraPage } from '../pages/libra/libra';
import { ScorpioPage } from '../pages/scorpio/scorpio';
import { SaggPage } from '../pages/sagg/sagg';
import { CapricornPage } from '../pages/capricorn/capricorn';
import { AquoPage } from '../pages/aquo/aquo';
import { PiscesPage } from '../pages/pisces/pisces';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Aries', component: AriesPage },
      { title: 'Taurus', component: TaurusPage },
      { title: 'Gemini', component: GeminiPage },
      { title: 'Cancer', component: CancerPage },
      { title: 'Leo', component: LeoPage },
      { title: 'Virgo', component: VirgoPage },
      { title: 'Libra', component: LibraPage },
      { title: 'Scorpio', component: ScorpioPage },
      { title: 'Sagittarius', component: SaggPage },
      { title: 'Capricorn', component: CapricornPage },
      { title: 'Aquarius', component: AquoPage },
      { title: 'Pisces', component: PiscesPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
