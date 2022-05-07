import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-destroy',
    template: '<ng-content></ng-content>'
})
export class DestroyComponent implements OnDestroy {

    destroy$ = new Subject<boolean>();

    ngOnDestroy(): void {
        this.destroy$.next(false);
        this.destroy$.complete();
    }
}
