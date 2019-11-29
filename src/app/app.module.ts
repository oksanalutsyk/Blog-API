import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';

import { HttpClientModule } from '@angular/common/http';
import { UserPipe } from './pipes/user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserPageComponent,
    UserPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
