import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MdToolbarModule, MdIconModule, MdCardModule, MdGridListModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DescriptionComponent} from './description/description.component';
import {SocialComponent} from './social/social.component';
import {SocialLinkComponent} from './social/social-link/social-link.component';
import {HeaderComponent} from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DescriptionComponent,
    SocialComponent,
    SocialLinkComponent,
    HeaderComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
