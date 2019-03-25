import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-suggestion-item',
  template: `
    <div class="row">
      <p class="suggestionCol" [ngStyle]="{backgroundColor: changeColor()}">{{text}}</p>
      <button [ngStyle]="{backgroundColor: changeColor()}"> {{like}} <i></i></button>
    </div>
  `,
  styleUrls: ['./suggestion-item.component.css']
})
export class SuggestionItemComponent {
  @Input() text: string;
  @Input() like: number;
  @Input() index: number;

  changeColor() {
    return this.index % 2 ? '#E7E7E7' : '#F0F0F0';
  }
}
