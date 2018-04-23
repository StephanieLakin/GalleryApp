import {Injectable} from '@angular/core';

@Injectable() //decorator
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0); // takes a copy of the image starting from the first one to the end
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [ // db columns and fields
   { "id": 1, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 2, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 3, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 4, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 5, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 6, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 7, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 8, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 9, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 10, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 11, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 12, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 13, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 14, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 15, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 16, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 17, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"},
   { "id": 18, "category": "portrait", "caption": "Master Series", "url": "assets/img/portrait_01.jpeg"}
]