import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';
import { BaseFilter } from '../../../../common/baseFilter';
import { FormControl } from '@angular/forms';
import { BaseBrowserComponent } from '../../../../common/base-browser/base-browser.component';
import { MatDialog } from '@angular/material/dialog';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-feature-browser',
  templateUrl: './feature-browser.component.html',
  styleUrl: './feature-browser.component.css',
})
export class FeatureBrowserComponent extends BaseBrowserComponent {
  constructor(
    dialog: MatDialog,
    featureService: FeatureService,
    vcRef: ViewContainerRef,
    resolver: ComponentFactoryResolver
  ) {
    super(dialog, featureService, vcRef, resolver); // This line calls the constructor of the base class
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
