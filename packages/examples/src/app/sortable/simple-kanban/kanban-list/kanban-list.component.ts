import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { DndSortableRenderer } from '@ng-dnd/sortable';
import { Card, CardList, SortableSpecService } from '../specs';

@Component({
  selector: 'kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss']
})
export class KanbanListComponent {
  @Input() list!: CardList;
  @Input() preview = false;
  @Output() addCard = new EventEmitter<string>();

  // we won't use these, but you can listen to any old monitor state if you like.
  // there is a shortcut for m.isDragging() for use in a template, called render?.isDragging$
  placeholder$ = this.render && this.render.source.listen(m => m.isDragging());
  isOver$ = this.render && this.render.target.listen(m => m.canDrop() && m.isOver());

  // You can inject any attached directives in a component
  // - When in the <dnd-preview>, the directive isn't attached, so make it @Optional()
  // - Also must be public if you're using it in your template, until the Ivy renderer lands
  constructor(
    public specs: SortableSpecService,
    @Optional() public render: DndSortableRenderer<CardList>,
  ) { }

  trackById = (_: number, x: Card) => x.id;
}
