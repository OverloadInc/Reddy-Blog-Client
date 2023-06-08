import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, // Load HomeComponent (localhost:4200)
      { path: 'post/:id/:title', component: SinglePostComponent}, // Load SinglePostComponent (localhost:4200/post/<id>/<title>)
      { path: 'posts', component: PostListComponent} // Load PostListComponent (localhost:4200/posts)
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
