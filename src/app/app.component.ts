import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestions = [
    {text: 'item 1', likes: 2, isLiked: false},
    {text: 'item 2', likes: 5, isLiked: false},
    {text: 'item 3', likes: 0, isLiked: false}
    ];

  onClick (i) {
    const suggestion = this.suggestions[i];
    suggestion.isLiked ? suggestion.likes -= 1 : suggestion.likes += 1;
    suggestion.isLiked = !suggestion.isLiked;
  }

  onSuggestionAdded(data: {text: string}) {
    this.suggestions.push({
      text: data.text,
      likes: 0,
      isLiked: false
    });
  }
}
