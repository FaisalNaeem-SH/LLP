import { Component, OnInit } from '@angular/core';
import { BaseEditorComponent } from '../../../../common/base-editor/base-editor.component';
import { ModuleService } from '../module.service';
import { FormBuilder } from '@angular/forms';
import { BaseService } from '../../../../common/base.service';

@Component({
  selector: 'app-module-editor',
  templateUrl: './module-editor.component.html',
  styleUrl: './module-editor.component.css',
})
export class ModuleEditorComponent extends BaseEditorComponent {
  public entity: any;
  public override service: any;
  constructor(public moduleService: ModuleService, formBuilder: FormBuilder) {
    super(moduleService, formBuilder);
    this.service.init();
    this.entity = BaseService.entity;
  }
}
