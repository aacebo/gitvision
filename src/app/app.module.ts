import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UniIconModule, UniIconService } from 'uniform';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesModule } from './resources';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    StoreModule.forRoot({ }),
    EffectsModule.forRoot([ ]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 10,
    }),

    UniIconModule,
    NgProgressModule.withConfig({
      color: '#0da6ba',
      spinner: false,
      thick: true,
    }),
    NgProgressHttpModule,

    AppRoutingModule,
    ResourcesModule,
  ],
})
export class AppModule {
  constructor(private readonly _icon: UniIconService) {
    this._icon.registry('fas');
  }
}
