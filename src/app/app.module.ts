import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CategoryNavbarComponent } from './components/layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SingleCategoryComponent } from './components/pages/single-category/single-category.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import {HomeComponent} from "./components/pages/home/home.component";
import {SinglePostComponent} from "./components/pages/single-post/single-post.component";
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    HomeComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    SingleCategoryComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
