import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-suggestion-form',
  template: `
    <div class="suggestionInput">
      <input [(ngModel)]="newSuggestion" type="text" placeholder="Add new suggestion">
      <button (click)="onAddSuggestion()" class="likeClmn">Add</button>
    </div>
  `,
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent {
  @Output() suggestionAdded = new EventEmitter<{text: string}>();
  newSuggestion = '';

  onAddSuggestion() {
    this.suggestionAdded.emit({text: this.newSuggestion});
    this.newSuggestion = '';
  }
}
