import {
  NgModule,
  ModuleWithProviders,
  NgZone
} from '@angular/core';

import { DndService } from './connector.service';
import {
  DndDirective,
  DragSourceDirective,
  DropTargetDirective,
  DragPreviewDirective
} from './dnd.directive';

import {
  DRAG_DROP_BACKEND,
  DRAG_DROP_BACKEND_FACTORY,
  DRAG_DROP_BACKEND_OPTIONS,
  DRAG_DROP_BACKEND_DEBUG_MODE,
  DRAG_DROP_MANAGER,
  DRAG_DROP_GLOBAL_CONTEXT
} from './tokens';

import {
  createDragDropManager,
  BackendFactory,
  DragDropManager,
  Backend,
} from 'dnd-core';

import { invariant } from './internal/invariant';

/** @ignore */
export function unpackBackendForEs5Users(backendOrModule: any) {
  // Auto-detect ES6 default export for people still using ES5
  let backend = backendOrModule;
  if (typeof backend === 'object' && typeof backend.default === 'function') {
    backend = backend.default;
  }
  invariant(
    typeof backend === 'function',
    'Expected the backend to be a function or an ES6 module exporting a default function. ' +
    'Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html'
  );
  return backend;
}

// TODO allow injecting window
/** @ignore */
// @dynamic
export function managerFactory(
  backendFactory: BackendFactory,
  zone: NgZone,
  context: any,
  backendOptions?: any,
  debugMode?: boolean,
): DragDropManager {
  backendFactory = unpackBackendForEs5Users(backendFactory);
  return zone.runOutsideAngular(() =>
    createDragDropManager(backendFactory, context, backendOptions, debugMode)
  );
}

/** @ignore */
// @dynamic
export function getBackend(manager: DragDropManager): Backend {
  return manager.getBackend();
}

/** @ignore */
declare const global: any;
/** @ignore */
export function getGlobalContext(): any {
  return typeof global !== 'undefined' ? global : (window as any);
}

/*
 * Hold on, this gets a little confusing.
 *
 * A dnd-core Backend has lots of useful methods for registering elements and firing events.
 * However, backends are not distributed this way.
 * The HTML5Backend and the TestBackend, when imported { default as HTML5Backend }, are not Backends, they are
 * functions: (manager: DragDropManager, ...) => Backend.
 * This is now known as a BackendFactory under dnd-core 4+ typescript annotations.
 *
 * However, Angular has its own conception of what a factory is for AOT. This is the 'factory'
 * to which BackendFactoryInput refers below.
 * Sometimes, users will want to preconfigure a backend (like TouchBackend, or MultiBackend).
 * For this, they need to export a function that returns a configured BackendFactory
 * and pass it in as  { backendFactory: exportedFunction }.
 */

/**
 * Used for providing backends to {@link DndModule#forRoot}.
 * You can configure your backend with `options`.
 */
export interface BackendInput {
  /** A plain backend, for example the HTML5Backend. */
  backend: BackendFactory;
  /**
   * Any configuration your backend accepts. Use this with the TouchBackend or the MultiBackend,
   * for example.
   */
  options?: any;
  /**
   * Whether dnd-core should enable debugging, which lets you see dnd-core actions
   * in the Redux extension for Chrome.
   */
  debug?: boolean;
}

/**
 * DEPRECATED / @deprecated
 *
 * To configure backends, prefer using the new `{ backend: SomeBackend, options: { ... } }` pattern.
 * This used to be necessary for configuring backends in AOT mode, but with the new API,
 * it is completely unnecessary.
 *
 * This would be more aptly named as 'backendFactoryFactory'. Example:
 *
 * ```typescript
 * // must export for use with Angular's AOT compilation.
 * export function MyBackendFactory(): BackendFactory {
 *     return (manager, context) => SomeBackend({ options: "here" })(manager, context);
 * }
 * forRoot({ backendFactory: MyBackendFactory })
 * ```
 */
export interface BackendFactoryInput {
  /**
   * DEPRECATED / @deprecated
   *
   * To configure backends, prefer using the new `{ backend: SomeBackend, options: { ... } }`
   * pattern. See {@link BackendFactoryInput}
   */
  backendFactory: () => BackendFactory;
  /**
   * Whether dnd-core should enable debugging, which lets you see dnd-core actions
   * in the Redux extension for Chrome.
   */
  debug?: boolean;
}

/** @ignore */
const EXPORTS = [
  DndDirective,
  DragSourceDirective,
  DropTargetDirective,
  DragPreviewDirective,
];

// @dynamic
@NgModule({
  declarations: EXPORTS,
  exports: EXPORTS,
})
export class DndModule {
  static forRoot(
    backendOrBackendFactory: BackendInput | BackendFactoryInput
  ): ModuleWithProviders<DndModule> {
    return {
      ngModule: DndModule,
      providers: [
        {
          provide: DRAG_DROP_BACKEND_FACTORY,
          // whichever one they have provided, the other will be undefined
          useValue: (backendOrBackendFactory as BackendInput).backend,
          useFactory: (backendOrBackendFactory as BackendFactoryInput).backendFactory,
        },
        {
          provide: DRAG_DROP_BACKEND_OPTIONS,
          // whichever one they have provided, the other will be undefined
          useValue: (backendOrBackendFactory as BackendInput).options,
        },
        {
          provide: DRAG_DROP_BACKEND_DEBUG_MODE,
          // whichever one they have provided, the other will be undefined
          useValue: backendOrBackendFactory.debug,
        },
        {
          provide: DRAG_DROP_GLOBAL_CONTEXT,
          useFactory: getGlobalContext,
        },
        {
          provide: DRAG_DROP_MANAGER,
          useFactory: managerFactory,
          deps: [
            DRAG_DROP_BACKEND_FACTORY,
            NgZone,
            DRAG_DROP_GLOBAL_CONTEXT,
            DRAG_DROP_BACKEND_OPTIONS,
            DRAG_DROP_BACKEND_DEBUG_MODE,
          ],
        },
        {
          provide: DRAG_DROP_BACKEND,
          deps: [DRAG_DROP_MANAGER],
          useFactory: getBackend,
        },
        DndService,
      ],
    };
  }
}
