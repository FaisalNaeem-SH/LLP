import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseEditorComponent } from '../../../../common/base-editor/base-editor.component';
import { UrlService } from '../url.service';
import { FormBuilder } from '@angular/forms';
import { BaseService } from '../../../../common/base.service';

@Component({
  selector: 'app-url-editor',
  templateUrl: './url-editor.component.html',
  styleUrl: './url-editor.component.css',
})
export class UrlEditorComponent extends BaseEditorComponent {
  public override service: any;
  public entity: any;
  firstFormGroup!: FormGroup;
  constructor(public urlService: UrlService, formBuilder: FormBuilder) {
    super(urlService, formBuilder);
    this.service.init();
    this.entity = BaseService.entity.model;
  }
}
