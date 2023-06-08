import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {FourNotFourComponent} from "./components/four-not-four/four-not-four.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // Load HomeComponent (localhost:4200)
  { path: 'post/:id/:title', component: SinglePostComponent}, // Load SinglePostComponent (localhost:4200/post/<id>/<title>)
  { path: 'posts', component: PostListComponent}, // Load PostListComponent (localhost:4200/posts)
  { path: '**', component: FourNotFourComponent} // Load FourNotFourComponent in case of any other path
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
