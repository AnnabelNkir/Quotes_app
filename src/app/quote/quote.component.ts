import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuotes:Quote[] = [
    new Quote(1, 'Life Quote', 'Curiosity about life in all of its aspects, I think, is still the secret of great creative people.','Leo Burnett',new Date(2021,10,12)),
    new Quote(2, 'Health Quote', 'The healthiest response to life is joy.','Deepak Chopra',new Date(2021,10,11)),
    new Quote(3, 'Wisdom Quote','The best portion of a good man’s life is his little nameless, unencumbered acts of kindness and of love.','Wordsworth',new Date(2021,10,10)),
    

  ];
showAuthor(index: string | number){
  this.myQuotes[index].moreDetails = !this.myQuotes[index].moreDetails;
}
removeQuote(toDelete: any,index: number){
  if(toDelete){
    let confirmDelete = confirm('Are you sure you want to delete this quote?');

  if(confirmDelete){
    this.myQuotes.splice(index,1);
  }
}
}

addNewQuote(myQuote: { id: number; datePosted: Date; }){
  let myQuoteLength = this.myQuotes.length;
  myQuote.id = myQuoteLength + 1;
  myQuote.datePosted = new Date();
  this.myQuotes.push(myQuote)
}
  constructor() { }

  ngOnInit() {
  }

}