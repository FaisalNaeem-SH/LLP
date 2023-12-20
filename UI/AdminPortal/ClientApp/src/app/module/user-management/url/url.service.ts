import { Injectable } from '@angular/core';
import { BaseService } from '../../../common/base.service';
import { UrlEditorComponent } from './url-editor/url-editor.component';
import { HttpClient } from '@angular/common/http';
import { URLVM } from './meta/model';
import { BaseFilter } from '../../../common/baseFilter';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UrlService extends BaseService {
  constructor(private HttpClient: HttpClient) {
    super(HttpClient);
  }
  public init(): void {
    BaseService.entity = {
      componentName: UrlEditorComponent,
      moduleName: 'Auth',
      model: {
        entity: URLVM,
        entityName: 'URL',
        PageNumber: 1,
        PageSize: 10,
        sortingArray: [],
        filterArray: [],
      },
      displayedColumns: ['action', 'id', 'title', 'url', 'description'],
      filterValues: [
        new BaseFilter('id', new FormControl('')),
        new BaseFilter('title', new FormControl('')),
        new BaseFilter('url', new FormControl('')),
        new BaseFilter('description', new FormControl('')),
      ],
    };
  }
}
