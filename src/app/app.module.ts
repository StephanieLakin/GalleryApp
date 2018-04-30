import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ng2-bootstrap';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ImageService } from '../app/shared/image.service';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {GalleryComponent} from './Gallery/gallery.component';
import {ImageDetailComponent} from './image/image-detail.component';
import {ImageFilterPipe} from './shared/filter.pipe';
import {appRoutes} from '../routes';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageDetailComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)    
  ],

  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
      

