import { Component, OnInit } from '@angular/core';
import { WordsDataService } from '../../services/words-data.service';


@Component({
  selector: 'app-learn-mode',
  templateUrl: './learn-mode.page.html',
  styleUrls: ['./learn-mode.page.scss'],
})

export class LearnModePage implements OnInit {

  word: string;
  translate : string;
  itemImageFileName : string ; 
  itemImageUrlPath: string = 'assets/data/pictures/';

  service: WordsDataService;

  constructor(wordsData: WordsDataService) {
                   this.service = wordsData;
 
                   var w = this.service.currentWord();
                   this.displayWord(w);       
  }

 ngOnInit() {
  }



 displayWord(w){
       this.word = w.word;
       this.translate = w.translate;
       this.itemImageFileName = w.picture;
  }



 nextItem() {
       var w = this.service.nextWord();
       this.displayWord(w);
 }


}
