import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

@Input() quote: Quote;
@Output() toDelete = new EventEmitter<boolean>();

deleteQuote(remove:boolean){
  this.toDelete.emit(remove);
}
numberOfLikes : number = 0;
numberOfDislikes: number = 0;
likeButtonClick() {
  this.numberOfLikes++;
}
dislikeButtonClick(){
  this.numberOfDislikes++;
}



  constructor() { }

  ngOnInit() {
  }

}