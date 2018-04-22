import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ng2-bootstrap';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
