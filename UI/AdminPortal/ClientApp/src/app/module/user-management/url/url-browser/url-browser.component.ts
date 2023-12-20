import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import { BaseBrowserComponent } from '../../../../common/base-browser/base-browser.component';
import { MatDialog } from '@angular/material/dialog';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url-browser',
  templateUrl: './url-browser.component.html',
  styleUrl: './url-browser.component.css',
})
export class UrlBrowserComponent
  extends BaseBrowserComponent
  implements OnInit
{
  constructor(
    dialog: MatDialog,
    UrlService: UrlService,
    vcRef: ViewContainerRef,
    resolver: ComponentFactoryResolver
  ) {
    super(dialog, UrlService, vcRef, resolver); // This line calls the constructor of the base class
    this.service.init();

    // Displayed Columns
    // this.displayedColumns = ['action', 'id', 'name', 'progress', 'fruit'];

    // Additional derived class initialization logic can go here
  }
  ngOnInit() {
    this.service.init();
    // this.displayedColumns = ['action', 'id', 'name', 'progress', 'fruit'];
  }
}
