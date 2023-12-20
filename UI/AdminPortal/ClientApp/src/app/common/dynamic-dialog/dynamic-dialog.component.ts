import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: '<ng-container *ngComponentOutlet="dynamicComponent"></ng-container>',
})
export class DynamicDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dynamicComponent: any) {}
}