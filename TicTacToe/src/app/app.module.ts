import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectionComponent } from './selection/selection.component';
import { GameComponent } from './game/game.component';
import { RouterModule, Routes } from '@angular/router';
const r:Routes=[
  {
    path:'select',component:SelectionComponent
  },
  {
    path:'play',component:GameComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(r)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
