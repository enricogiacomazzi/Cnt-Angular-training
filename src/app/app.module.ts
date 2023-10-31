import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card.component';
import { ClockComponent } from './clock/clock.component';
import { DisplayTempPipe } from './display-temp.pipe';
import { CommonModule } from '@angular/common';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';

@NgModule({
  declarations: [
    AppComponent, ListItemComponent, ListComponent, CardComponent, ClockComponent, DisplayTempPipe, Box1Component, Box2Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
