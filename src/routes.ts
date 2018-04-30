import {Routes} from "@angular/router";
import {GalleryComponent} from './app/Gallery/gallery.component';
import {ImageDetailComponent} from './app/image/image-detail.component'; 

export const appRoutes:Routes = [
    {path:"gallery", component:GalleryComponent},
    {path:"images/:id", component:ImageDetailComponent},
    {path:"", redirectTo: "/Gallery", pathMatch:'full'}
]