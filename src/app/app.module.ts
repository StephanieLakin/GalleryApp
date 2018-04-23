import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ng2-bootstrap';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ImageService } from '../app/shared/image.service';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {GalleryComponent} from './Gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ImageService,
    AlertModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
