import { FormControl } from '@angular/forms';

export class BaseFilter {
  name = '';
  filterString = '';
  filter = new FormControl('');
  constructor(name: string, filter: FormControl) {
    this.name = name;
    this.filter = filter;
  }
}
