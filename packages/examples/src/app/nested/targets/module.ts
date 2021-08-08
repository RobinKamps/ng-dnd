import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UtilityModule } from "app/utility.module";
import { SkyhookDndModule } from "@ng-dnd/core";
import { RouterModule } from "@angular/router";
import { SkyhookMultiBackendModule } from "@ng-dnd/multi-backend";

import { ContainerComponent } from "./container.component";
import { Box } from './box.component';
import { Dustbin } from './dustbin.component';

@NgModule({
  declarations: [
    ContainerComponent,
    Box,
    Dustbin,
  ],
  imports: [
    CommonModule,
    UtilityModule,
    SkyhookDndModule,
    SkyhookMultiBackendModule,
    RouterModule.forChild([{ path: "", component: ContainerComponent }]),
  ],
})
export class NestedTargetsModule {
}
