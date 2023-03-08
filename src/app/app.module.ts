import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavComponent } from './layouts/category-nav/category-nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CommentSectComponent } from './comments/comment-sect/comment-sect.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsCondComponent } from './pages/terms-cond/terms-cond.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    ContactUsComponent,
    SubscribeComponent,
    CommentSectComponent,
    CommentListComponent,
    SinglePostComponent,
    AboutUsComponent,
    TermsCondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
