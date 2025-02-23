import { Directive, Input, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { DndService, DragSource } from '@ng-dnd/core';
import { DraggedItem, SortableSpec, Size } from '../types';

export const EXTERNAL_LIST_ID: symbol = Symbol('EXTERNAL_LIST_ID');

@Directive({
  selector: '[dndSortableExternal]',
  exportAs: 'dndSortableExternal'
})
export class DndSortableExternal<Data> implements OnChanges, OnDestroy {
  @Input('dndSortableExternal') spec!: SortableSpec<Data>;

  /**
   * This source has beginDrag and endDrag implemented in line with what dndSortableRender does.
   *
   * You must, like dndSortableRender, attach it with [dragSource] somewhere.
   */
  public source: DragSource<DraggedItem<Data>>;

  /** @ignore */
  constructor(
    private dnd: DndService,
    private el: ElementRef<Element>
  ) {
    this.source = this.dnd.dragSource<DraggedItem<Data>>(null, {
      canDrag: monitor => {
        if (this.spec && this.spec.canDrag) {
          // beginDrag has not been called yet, so there is no data, and this is not part of a list.
          // you should be able to decide canDrag without these anyway.
          return this.spec.canDrag(undefined as any, undefined, monitor);
        }
        return true;
      },
      beginDrag: () => {
        if (typeof this.spec.createData !== 'function') {
          throw new Error('spec.createData must be a function');
        }
        return {
          type: this.spec.type,
          data: this.spec.createData(),
          hover: { index: -1, listId: EXTERNAL_LIST_ID },
          isInternal: false,
          index: -1,
          listId: EXTERNAL_LIST_ID,
          size: this.size(),
        };
      },
      endDrag: monitor => {
        const item = monitor.getItem();
        if (item) {
          this.spec && this.spec.endDrag && this.spec.endDrag(item, monitor);
        }
      }
    });
  }

  /** @ignore */
  private size() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return new Size(
      rect.width || rect.right - rect.left,
      rect.height || rect.bottom - rect.top
    );
  }

  /** @ignore */
  ngOnChanges() {
    this.source.setType(this.spec.type);
  }
  /** @ignore */
  ngOnDestroy() {
    this.source.unsubscribe();
  }
}
