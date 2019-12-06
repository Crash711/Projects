import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AriesPage,
    TaurusPage,
    GeminiPage,
    CancerPage,
    LeoPage,
    VirgoPage,
    LibraPage,
    ScorpioPage,
    SaggPage,
    CapricornPage,
    AquoPage,
    PiscesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AriesPage,
    TaurusPage,
    GeminiPage,
    CancerPage,
    LeoPage,
    VirgoPage,
    LibraPage,
    ScorpioPage,
    SaggPage,
    CapricornPage,
    AquoPage,
    PiscesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
