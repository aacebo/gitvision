import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UniIconModule, UniIconService } from 'uniform';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavModule } from './features/sidenav';
import { ToolbarModule } from './features/toolbar';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UniIconModule,
    AppRoutingModule,

    SidenavModule,
    ToolbarModule,
  ],
})
export class AppModule {
  constructor(private readonly _icon: UniIconService) {
    this._icon.registry('fas');
  }
}
