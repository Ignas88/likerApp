import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-suggestion-item',
  template: `
    <div class="row">
      <p class="suggestionCol">{{text}}</p>
      <button> {{like}} <i></i></button>
    </div>
  `,
  styleUrls: ['./suggestion-item.component.css']
})
export class SuggestionItemComponent {
  @Input() text: string;
  @Input() like: number;
}
