import { BackendFactory, DragDropManager } from 'dnd-core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import {
  default as MultiBackend,
  MouseTransition,
  TouchTransition,
  BackendTransition
} from 'dnd-multi-backend';

export const HTML5ToTouch = {
  backends: [
    {
      backend: HTML5Backend,
      transition: MouseTransition
    },
    {
      backend: TouchBackend,
      options: {
        enableMouseEvents: false,
      },
      preview: true,
      transition: TouchTransition
    }
  ] as BackendTransition[]
};

export function DefaultMultiBackend(manager: DragDropManager, context: any) {
  return MultiBackend(manager, context, HTML5ToTouch);
}

/**
 * DEPRECATED / @deprecated
 *
 * Prefer providing HTML5ToTouch directly as `options` to `forRoot`.
 *
 * ```typescript
 * import { MultiBackend, HTML5ToTouch } from '@ng-dnd/multi-backend';
 *
 * imports: [
 *   ...,
 *   DndModule.forRoot({ backend: MultiBackend, options: HTML5ToTouch }),
 * ]
 * ```
 */
export function createDefaultMultiBackend() {
  return DefaultMultiBackend as BackendFactory;
}

