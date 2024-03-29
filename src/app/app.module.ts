import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './route/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { ArticleTagComponent } from './article-tag/article-tag.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './service/api/api.service';
import { IntroduceComponent } from './introduce/introduce.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { LogStatusService } from './service/log-status/log-status.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ArticleComponent,
    ArticleTagComponent,
    IntroduceComponent,
    ArticlePageComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService,LogStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
