import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { TestBackend } from 'react-dnd-test-backend';
import { DndModule, DRAG_DROP_MANAGER } from '@ng-dnd/core';
import { By } from '@angular/platform-browser';

describe(TestComponent.name, () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let backend: any;
  let source: any;
  let target: any;

  // Tests whether the dragging class has applied
  const draggingClassApplied = () => {
    return fixture.debugElement.query(By.css('.dragging')) != null;
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DndModule.forRoot({ backend: TestBackend })],
      declarations: [TestComponent]
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    const manager = TestBed.get(DRAG_DROP_MANAGER);
    backend = manager.getBackend();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    source = component.source.getHandlerId();
    target = component.target.getHandlerId();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should drag and then drop', () => {
    backend.simulateBeginDrag([source]);
    fixture.detectChanges();
    expect(draggingClassApplied()).toBeTruthy();

    backend.simulateHover([target]);
    backend.simulateDrop();
    backend.simulateEndDrag();
    expect(component.dropped).toBeTruthy();
    expect(component.endDrag).toBeTruthy();
    fixture.detectChanges();
    expect(draggingClassApplied()).toBeFalsy();
  });

  it('should not react to a plain end drag', () => {
    backend.simulateBeginDrag([source]);
    backend.simulateHover([target]);
    backend.simulateEndDrag();
    expect(component.dropped).toBeFalsy();
    expect(component.endDrag).toBeTruthy();
    fixture.detectChanges();
    expect(draggingClassApplied()).toBeFalsy();
  });
});
