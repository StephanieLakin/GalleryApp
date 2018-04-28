import {Component} from '@angular/core';    
import { ImageService } from '../shared/image.service';


@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})    

export class ImageDetailComponent {

    image:any
    
    constructor(private imageService:ImageService){}
   
}