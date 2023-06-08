import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AppRoutingModule } from './app-routing.module';
import { FourNotFourComponent } from './components/four-not-four/four-not-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    SinglePostComponent,
    FourNotFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
