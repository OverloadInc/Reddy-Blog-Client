import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/pages/home/home.component";
import {CategoryNavbarComponent} from "./components/layouts/category-navbar/category-navbar.component";
import {SinglePostComponent} from "./components/pages/single-post/single-post.component";
import {AboutUsComponent} from "./components/pages/about-us/about-us.component";
import {TermsAndConditionsComponent} from "./components/pages/terms-and-conditions/terms-and-conditions.component";
import {ContactUsComponent} from "./components/pages/contact-us/contact-us.component";

// Build the routes to access the different pages of the website
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryNavbarComponent},
  { path: 'posts', component: SinglePostComponent},

  { path: 'about', component: AboutUsComponent},
  { path: 'term-condition', component: TermsAndConditionsComponent},
  { path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
