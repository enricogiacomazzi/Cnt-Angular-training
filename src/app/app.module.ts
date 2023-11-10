import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './features/list/list.component';
import { DetailComponent } from './features/detail/detail.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DumbInterceptor } from './interceptors/dumb.interceptor';
import { ApiService } from './services/api.service';
import { ChatComponent } from './features/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    NotFoundComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: DumbInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
