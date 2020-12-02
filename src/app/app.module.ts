import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { PictureService } from './picture-service';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
