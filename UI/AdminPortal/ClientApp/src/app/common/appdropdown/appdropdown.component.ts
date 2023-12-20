import { AfterViewInit, Component, Input } from '@angular/core';
import { BaseService } from '../base.service';
import { BaseItem } from '../BaseItem';

@Component({
  selector: 'app-appdropdown',
  templateUrl: './appdropdown.component.html',
  styleUrl: './appdropdown.component.css',
})
export class AppdropdownComponent implements AfterViewInit {
  public service: any;
  public items!: BaseItem[];
  @Input() label: string = '';

  constructor(public baseService: BaseService) {
    // Create 100 users
    this.service = baseService;
  }
  ngAfterViewInit() {
    this.items = this.service.GetLookup(this.label);
  }
  // label: string = 'Dropdown';
}
