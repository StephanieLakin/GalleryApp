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

const IMAGES =[ 
   { "id": 1, "category": "drawing", "Do you like my owl?": "Prisma Color", "url":"assets/img/wiseguy_01.jpg"},
   { "id": 2, "category": "drawing", "caption": "Sea Lion", "url":"assets/img/sealion_02.jpg"},
   { "id": 3, "category": "drawing", "caption": "Renaissance", "url":"assets/img/Renaissance_03.jpg"},
   { "id": 4, "category": "drawing", "caption": "Bedouin", "url":"assets/img/Niqabi_04.jpg"},
   { "id": 5, "category": "drawing", "caption": "Parthenon", "url":"assets/img/Parthenon_05.jpg"},
   { "id": 6, "category": "drawing", "caption": "Master Series", "url":"assets/img/Khaliji_06.jpg"},
   { "id": 7, "category": "painting", "caption": "Khaliji", "url":"assets/img/heavenhelpus_07.jpg"},
   { "id": 8, "category": "painting", "caption": "Tree Frogs", "url":"assets/img/frogfull_08.jpg"},
   { "id": 9, "category": "painting", "caption": "Kuwaiti Emir", "url":"assets/img/Emir_09.jpg"},
   { "id": 10, "category": "drawing", "caption": "Elmarie", "url":"assets/img/Elmarie_10.jpg"},
   { "id": 11, "category": "painting", "caption": "Angel", "url":"assets/img/Angelworld_11.jpg"},
   { "id": 12, "category": "drawing", "caption": "Lonely", "url":"assets/img/alone_12.jpg"},
   { "id": 13, "category": "drawing", "caption": "Life Drawing", "url":"assets/img/LifeSketch1_13.jpg"},
   { "id": 14, "category": "drawing", "caption": "Life Drawing", "url":"assets/img/LifeSketch_14.jpg"},
   { "id": 15, "category": "drawing", "caption": "Life Drawing", "url":"assets/img/LifeSketch3_15.jpg"},
   { "id": 16, "category": "painting", "caption": "George, Incomplete","url": "assets/img/WorkInProgress_16.jpg"},
   { "id": 17, "category": "drawing", "caption": "Self Portrait 1988","url": "assets/img/SelfPortrait1988_17.jpg"},
   { "id": 18, "category": "painting", "caption": "Fantasy", "url":"assets/img/Creature_18.jpg"},
   { "id": 19, "category": "painting", "Wise Guy": "Self Portrait 2018r","url":"assets/img/SelfPortrait2018_19.jpg"},
   { "id": 20, "category": "painting", "caption": "KMR, Incomplete","url":"assets/img/kmr_20.jpg"}
]

