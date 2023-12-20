import { Component } from '@angular/core';
import { BaseEditorComponent } from '../../../../common/base-editor/base-editor.component';
import { FeatureService } from '../feature.service';
import { FormBuilder } from '@angular/forms';
import { BaseService } from '../../../../common/base.service';

export interface PeriodicElement {
  feature: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { feature: 'Can View' },
  { feature: 'Can Edit' },
  { feature: 'Can Delete' },
  { feature: 'Can Add' },
  { feature: 'Can See Column' },
];
@Component({
  selector: 'app-feature-editor',
  templateUrl: './feature-editor.component.html',
  styleUrl: './feature-editor.component.css',
})
export class FeatureEditorComponent extends BaseEditorComponent {
  displayedColumns: string[] = ['feature', 'action'];
  dataSource = ELEMENT_DATA;

  public entity: any;
  public override service: any;
  constructor(public featureService: FeatureService, formBuilder: FormBuilder) {
    super(featureService, formBuilder);
    this.service.init();
    this.entity = BaseService.entity;
  }
}
