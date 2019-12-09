import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class WordsDataService {

  private selectedIndex : number = 0;
  private numberOfWords: number;


  words :  Array<any> = [
   {
      "_id":18,
      "word":"fish",
      "translate":"der Fisch",
      "tags":"animal",
      "picture":"fish.jpg",
      "audio":"En-uk-fish.ogg.mp3"
   },
   {
      "_id":5,
      "word":"butterfly",
      "translate":"der Schmetterling",
      "tags":"animal",
      "picture":"butterfly.jpg",
      "audio":"En-uk-a_butterfly.ogg.mp3"
   },
   {
      "_id":8,
      "word":"cat",
      "translate":"die Katze",
      "tags":"animal",
      "picture":"cat.jpg",
      "audio":"En-uk-a_cat.ogg.mp3"
   },
   {
      "_id":12,
      "word":"dog",
      "translate":"der Hund",
      "tags":"animal",
      "picture":"dog.jpg",
      "audio":"En-uk-a_dog.ogg.mp3"
   },
   {
      "_id":20,
      "word":"grasshopper",
      "translate":"die Heuschrecke",
      "tags":"animal",
      "picture":"grasshopper.jpg",
      "audio":"En-uk-grasshopper.ogg.mp3"
   },
   {
      "_id":35,
      "word":"sheep",
      "translate":"das Schaf",
      "tags":"animal",
      "picture":"sheep.jpg",
      "audio":"En-uk-a_sheep.ogg.mp3"
   }
];



  constructor(private http: HttpClient) { 

     // http is made available in the service. It is not yet used.
     // The words variable is directly initialized.

     console.log('words-data.service.ts -> constructor()');


  }  



  getWords() {
    return this.words;
  }

  nextWord() {
    this.selectedIndex = this.selectedIndex + 1;
    this.numberOfWords = this.words.length;
    if (this.selectedIndex == this.numberOfWords) {this.selectedIndex = 0};
    var w = this.words[this.selectedIndex]; 
    return w; 
  }


  currentWord() {
    var w = this.words[this.selectedIndex]; 
    return w; 
  }


}
