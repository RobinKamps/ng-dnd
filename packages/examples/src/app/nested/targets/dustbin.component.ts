import { Input, Component, OnDestroy } from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { ItemTypes } from './item-types';

@Component({
  selector: 'app-nested-targets-dustbin',
  template: `
    <ng-container *ngIf="collected$ | async as c">
      <div [dropTarget]="target" class="box" [style.background-color]="getColor(c)" >

        <p>{{ greedy ? 'greedy' : 'not greedy' }}</p>

        <p *ngIf="hasDroppedOnChild || hasDropped">{{ 'dropped' + (hasDroppedOnChild ? ' on child' : '') }}</p>

        <ng-content select="app-nested-targets-dustbin"></ng-content>

      </div>
    </ng-container>
  `,
  styleUrls: ['./dustbin.component.scss']
})
export class DustbinComponent implements OnDestroy {
  @Input() greedy = false;

  hasDropped = false;
  hasDroppedOnChild = false;

  lastDroppedColor = '';
  backgroundColor = '';

  target = this.dnd.dropTarget(ItemTypes.BOX, {
    drop: (monitor) => {
      const hasDroppedOnChild = monitor.didDrop();
      if (hasDroppedOnChild && !this.greedy) {
        return;
      }

      this.hasDropped = true,
        this.hasDroppedOnChild = hasDroppedOnChild;
    }
  });

  collected$ = this.target.listen(monitor => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }));

  text() {
    return this.hasDropped && `dropped${this.hasDroppedOnChild ? ' on child' : ''}` || '';
  }

  getColor({ isOver, isOverCurrent }: { isOver: boolean, isOverCurrent: boolean }) {
    if (isOverCurrent || (isOver && this.greedy)) {
      return 'darkgreen';
    }
  }

  constructor(private dnd: DndService) { }

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
