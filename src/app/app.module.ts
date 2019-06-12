import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeGetComponent } from './joke-get/joke-get.component';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { JokesService } from './jokes.service';

@NgModule({
  declarations: [
    AppComponent,
    JokeGetComponent,
    JokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [ JokesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
