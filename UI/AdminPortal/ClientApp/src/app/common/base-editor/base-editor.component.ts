import { Component, Input } from '@angular/core';
import { BaseService } from '../base.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseModel } from '../baseModel';

@Component({
  selector: 'app-base-editor',
  templateUrl: './base-editor.component.html',
  styles: `mat-dialog-actions{gap:10px;}`,
})
export class BaseEditorComponent {
  public service: any;
  @Input() entityForm!: FormGroup;
  public entityModel: BaseModel = BaseService.entity.model;

  constructor(
    public baseService: BaseService,
    public formBuilder: FormBuilder
  ) {
    // Create 100 users
    this.service = baseService;
  }
  ngOnInit(): void {
    this.entityForm = this.formBuilder.group({});
    // Iterate over the properties of entityModel
    Object.keys(this.entityModel).forEach((key) => {
      // Add each property as a form control to the form group
      this.entityForm.addControl(
        key,
        this.formBuilder.control(this.entityModel[key as keyof BaseModel])
      );
    });

    // this.service.init();
  }
  //Base Browser Buttons Array
  editorButtons: any = [
    {
      name: 'Submit',
      callBackFunction: () => this.save(),
      isActive: true,
    },
    {
      name: 'Cancel',
      isActive: true,
    },
  ];

  save() {
    this.service.Save();
  }
}
