import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { ErrorModule } from './error/error.module';
import { ResortCustomersModule } from './resort-customers/resort-customers.module';
import { SharedModule } from './shared/shared.module';
import { LockScreenModule } from './lock-screen/lock-screen.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        LockScreenModule,
        HomeModule,
        MenuModule,
        ErrorModule,
        ProfileModule,
        ResortCustomersModule,

        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
