import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedService } from './variable';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MainPageComponent,
    HeaderComponent,
    DetailPanelComponent,
    SignInUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ClarityModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
