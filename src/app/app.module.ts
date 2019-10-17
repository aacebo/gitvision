import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UniIconModule, UniIconService } from 'uniform';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from './core/interceptors';
import { ResourcesModule } from './resources';

import { SidenavModule } from './features/sidenav';
import { ToolbarModule } from './features/toolbar';

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

    AppRoutingModule,
    ResourcesModule,

    SidenavModule,
    ToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {
  constructor(private readonly _icon: UniIconService) {
    this._icon.registry('fas');
  }
}
