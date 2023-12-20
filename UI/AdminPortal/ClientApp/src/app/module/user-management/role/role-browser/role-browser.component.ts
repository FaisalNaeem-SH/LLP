import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';
import { BaseBrowserComponent } from '../../../../common/base-browser/base-browser.component';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from '../role.service';
import { BaseFilter } from '../../../../common/baseFilter';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-role-browser',
  templateUrl: './role-browser.component.html',
  styleUrl: './role-browser.component.css',
})
export class RoleBrowserComponent extends BaseBrowserComponent {
  constructor(
    dialog: MatDialog,
    roleService: RoleService,
    vcRef: ViewContainerRef,
    resolver: ComponentFactoryResolver
  ) {
    super(dialog, roleService, vcRef, resolver); // This line calls the constructor of the base class
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
