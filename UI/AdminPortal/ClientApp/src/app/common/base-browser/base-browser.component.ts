import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from '../base.service';
import { BaseModel } from '../baseModel';
import { BaseFilter } from '../baseFilter';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-browser',
  templateUrl: './base-browser.component.html',
  styleUrl: './base-browser.component.scss',
})
export class BaseBrowserComponent implements AfterViewInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<BaseModel>;
  public service: any;
  public filterValues!: [BaseFilter];
  public checkboxValue: boolean = false;
  checkedIds: number[] = [];
  filterInputData: any[] = [];
  //Base Browser Buttons Array
  browseButtons: any = [
    {
      name: 'Add',
      callBackFunction: () => this.openDialog(),
      isActive: true,
    },
    {
      name: 'Delete',
      callBackFunction: () => this.DeleteHandler(),
      isActive: true,
    },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChildren('checkBox') checkBoxes!: QueryList<any>;
  @ViewChildren('input') filterInputs!: QueryList<any>;
  @ViewChild('tableWrapper') tableContainer!: ElementRef;
  constructor(
    public dialog: MatDialog,
    public baseService: BaseService,
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
    // Create 100 users
    this.service = baseService;
    this.displayedColumns = BaseService.entity.displayedColumns;
    this.filterValues = BaseService.entity.filterValues;
    this.dataSource = new MatTableDataSource(this.service.getAllEntities());
  }

  ngAfterViewInit() {}

  checkTableContainer() {
    if (this.tableContainer && this.tableContainer.nativeElement) {
      const totalHeight = this.tableContainer.nativeElement.scrollHeight;
      const visibleHeight = this.tableContainer.nativeElement.offsetHeight;
      const scrollPosition = this.tableContainer.nativeElement.scrollTop;

      if (scrollPosition + visibleHeight === totalHeight) {
        console.log('Reached the bottom!');
        // Call your method or perform any other actions
      }
    } else {
      // Retry after a short delay if the element is still not available
      requestAnimationFrame(() => {
        this.checkTableContainer();
      });
    }
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  //apply filter
  applyFilter() {
    // BaseService.entity.model.PageNumber = 1;
    // this.baseService.getAllEntities();
    // this.filterValues.forEach((element) => {
    //   this.service.filterArray.push(element);
    // });

    this.filterInputData = this.filterInputs
      .filter((input) => input.value.trim().toLowerCase)
      .map((input) => {
        +input.id.replace('input', '');
        console.log(input);
      });
    console.log('Selected IDs:', this.filterInputData);
  }

  openDialog(id?: number) {
    if (id !== undefined) {
      this.baseService.getEntityById(id);
    }
    // Open the dialog with the dynamic component
    const dialogRef = this.dialog.open(BaseService.entity.componentName);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //get checked value

  // getCheckbox() {
  //   this.checked = [];
  //   const checked = this.checkBox.filter((checkbox) => checkbox.checked);
  //   checked.forEach((data) => {});
  // }
  // //Delete
  DeleteHandler = () => {
    // console.log(this.checkBox);
    // const checked = this.checkBox.filter((checkbox) => checkbox.checked);
    this.checkedIds = this.checkBoxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => +checkbox.id.replace('cbx', ''));

    console.log('Selected IDs:', this.checkedIds);
  };
  onScroll(event: any): void {
    if (this.tableContainer) {
      const totalHeight = this.tableContainer.nativeElement.scrollHeight;
      const visibleHeight = this.tableContainer.nativeElement.offsetHeight;
      const scrollPosition = this.tableContainer.nativeElement.scrollTop;

      if (scrollPosition + visibleHeight + 1 > totalHeight) {
        BaseService.entity.model.PageNumber++;
        // Call your service to get more entities
        const newEntities = this.service.getAllEntities();

        // Append the new data to the existing dataSource
        const currentData = this.dataSource.data;
        const newData = currentData.concat(newEntities); // Use concat to append arrays

        // Assign the new data to the dataSource
        this.dataSource.data = newData;
        // Call your method or perform any other actions
      }
    }
  }
  getAllEnitieswithUpdateFilters(): void {
    this.updateFilters();
    BaseService.entity.model.PageNumber = 1;
    this.dataSource.data = this.service.getAllEntities();
  }
  updateFilters(): void {
    BaseService.entity.model.filterArray = [];
    this.filterInputs.forEach((input) => {
      if (input.nativeElement.value) {
        BaseService.entity.model.filterArray.push({
          parameterName: input.nativeElement.name,
          parameterValue: input.nativeElement.value,
        });
      }
    });
    console.log(1);
  }
  getAllEnitieswithUpdateSort(columnName: string): void {
    BaseService.entity.model.sortingArray = [];
    BaseService.entity.model.sortingArray.push({
      sortingColumnName: columnName,
      sortingColumnDirection: this.sort.direction,
    });
    this.dataSource.data = this.service.getAllEntities();
  }
}
