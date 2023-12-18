import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

interface User {

    age: number;

}

@Component({
    selector: 'app-component-1',
    templateUrl: './component-1.component.html',
    styleUrls: [
        './component-1.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1 implements OnChanges, DoCheck {

    // Input properties

    @Input()
    public level = 0;

    @Input()
    public user!: User;

    // Public properties

    public nbDoCheck = 0;
    public nbChanges = 0;

    // Calculated properties

    public get shouldDisplayChildren(): boolean {
        const MAX_CHILDREN = 4;

        return this.level < MAX_CHILDREN;
    }

    // Lifecycle

    constructor(
        private _cd: ChangeDetectorRef
    ) {}

    ngDoCheck() {
        this.nbDoCheck++;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['user']) {
            this.nbChanges++;
        }
    }

    // Event listeners

    public onChangeUserClicked1() {
        this.user = this.user ?? {
            age: 0
        };

        this.user = {
            age: this.user.age + 1
        };
    }

    public onChangeUserClicked2() {
        this.user = this.user ?? {
            age: 0
        };

        this.user.age++;
    }

    public onChangeDetectionButtonClicked() {
        this._cd.detectChanges();
    }

    public onMarkForCheckButtonClicked() {
        this._cd.markForCheck();
    }
}
