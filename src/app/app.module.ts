import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { DayCountPipe } from './day-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightVoteDirective } from './highlight-vote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteInfoComponent,
    DayCountPipe,
    QuoteFormComponent,
    HighlightVoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }