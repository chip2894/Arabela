import {
    importProvidersFrom,
    NgModule,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { appConfig } from './app.config';
import { SharedModule } from './shared/shared-module';
import { LoginModule } from './features/login/login-module';

@NgModule({
    declarations: [App],
    imports: [BrowserModule, AppRoutingModule, SharedModule, LoginModule],
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        importProvidersFrom(BrowserAnimationsModule),
        appConfig.providers,
    ],
    bootstrap: [App],
})
export class AppModule {}
