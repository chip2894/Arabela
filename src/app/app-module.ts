import { importProvidersFrom, NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home-module';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { appConfig } from './app.config';
import { Button } from "primeng/button";

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    Button
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    importProvidersFrom(BrowserAnimationsModule),
    appConfig.providers
  ],
  bootstrap: [App]
})
export class AppModule { }
