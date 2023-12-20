import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseBrowserComponent } from '../../../../common/base-browser/base-browser.component';
import { ModuleService } from '../module.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BaseFilter } from '../../../../common/baseFilter';

@Component({
  selector: 'app-module-browser',
  templateUrl: './module-browser.component.html',
  styleUrl: './module-browser.component.css',
})
export class ModuleBrowserComponent extends BaseBrowserComponent {
  constructor(
    dialog: MatDialog,
    moduleService: ModuleService,
    vcRef: ViewContainerRef,
    resolver: ComponentFactoryResolver
  ) {
    super(dialog, moduleService, vcRef, resolver); // This line calls the constructor of the base class
    this.service.init();

    // Additional derived class initialization logic can go here
  }

  ngOnInit() {
    this.service.init();
  }

  //Create Filter
  // createFilter(): (data: any, filter: string) => boolean {
  //   let filterFunction = function(data, filter): boolean {
  //     let searchTerms = JSON.parse(filter);
  //     return data.name.toLowerCase().indexOf(searchTerms.name) !== -1
  //       && data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
  //       && data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1
  //       && data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1;
  //   }
  //   return filterFunction;
  //}
}
