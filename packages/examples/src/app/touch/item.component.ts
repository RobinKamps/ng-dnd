import { Component, Input } from '@angular/core';
import { DndService } from '@ng-dnd/core';

@Component({
  selector: 'touch-draggable-item',
  template: `
    <div [dragSource]="itemSource">
        <touch-item [color]="color"></touch-item>
    </div>
  `,
  styles: [`
    div { display: inline; width: auto; }
  `]
})
export class DraggableItemComponent {
  @Input() color = '';
  itemSource = this.dnd.dragSource('ITEM', {
    beginDrag: () => ({ color: this.color })
  });
  constructor(private dnd: DndService) { }
}

@Component({
  selector: 'touch-item',
  template: `<div class="firefox-bug" [style.background]="color || 'red'"></div>`,
  styles: [`
    div { width: 400px; height: 300px; margin: 16px; }
  `]
})
export class ItemComponent {
  @Input() color = '';
}
