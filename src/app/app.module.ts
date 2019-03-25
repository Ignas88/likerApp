import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuggestionFormComponent } from './components/suggestion-form/suggestion-form.component';
import { SuggestionItemComponent } from './components/suggestion-item/suggestion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SuggestionFormComponent,
    SuggestionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
