import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, map, merge, of, pipe, startWith, switchMap, takeUntil } from 'rxjs';
import { DestroyComponent } from './destroy.component';
import { MatTableDataSource } from '@angular/material/table';
import { BaseService } from '../services/base/base.service';
import { PaginationResult } from '../models/pagination-results';


@Component({
    selector: 'app-base-list',
    template: '<ng-container></ng-container>'
})
export class BaseListComponent<T> extends DestroyComponent implements AfterViewInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    dataSource = new MatTableDataSource<T>();
    defaultSort: string;
    displayedColumns: string[];
    isLoadingResults = true;
    isRateLimitReached = false;
    pageSizeOptions: number[] = [10, 20, 30, 40, 50];
    resultsLength = 0;
    searchEmitter = new EventEmitter();
    searchField: string;

    constructor(
        @Inject(String) protected service: BaseService<T>,
        protected cdr: ChangeDetectorRef
    ) {
        super();
    }

    ngAfterViewInit(): void {
        this.load();
    }

    get page(): number {
        return this.paginator.pageIndex + 1;
    }

    get order(): string {
        return `${this.sort.active}:${this.sort.direction}`;
    }

    get limit() {
        return this.paginator.pageSize;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.searchField = filterValue.trim();
        // If the user performs a search, reset back to the first page.
        this.paginator.pageIndex = 0;
        this.load();
    }

    convertData(data: PaginationResult<T>) {
        return data.rows;
    }

    search() {
        return !!this.searchField ? { search: this.searchField } : {};
    }

    load() {
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                takeUntil(this.destroy$),
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.service.all(
                        this.search(),
                        this.page,
                        this.limit,
                        this.order
                    ).pipe(catchError((error) => {
                        console.error(error);
                        this.isLoadingResults = false;
                        return of(new PaginationResult<T>());
                    }));
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = data === null;

                    data.rows = this.convertData(data);

                    // Only refresh the result length if there is new data. In case of rate
                    // limit errors, we do not want to reset the paginator to zero, as that
                    // would prevent users from re-triggering requests.
                    return data;
                }),
            )
            .subscribe(data => {
                this.dataSource.data = data.rows;
                this.isLoadingResults = false;
                this.resultsLength = data.count;
                this.cdr.detectChanges();
            });
    }
}
