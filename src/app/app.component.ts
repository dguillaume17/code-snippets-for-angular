import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';


interface Test {
    count: number;
}

@Component({
    selector: 'app-child',
    template: `
        <h1>{{count?.count}}</h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppChildComponent {
    @Input()
    count!: Test | null;

}

@Component({
    selector: 'app-root',
    template: `
        <h1><app-child [count]="count"></app-child></h1><button (click)="onClick()">click</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    count: Test = {
        count: 0
    };

    constructor(
        private _ngZone: NgZone,
        private _cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.count = {
            count: this.count.count + 1
        }
        this.count = {
            count: this.count.count + 1
        }
        this._ngZone.run(() => {
            setInterval(() => {
                

                this.count = {
                    count: this.count.count + 1
                }
            }, 1000)
                // this._cd.detectChanges();
            
        })
        
    }

    onClick() {}

}
