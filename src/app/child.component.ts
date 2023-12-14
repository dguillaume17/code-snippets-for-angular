import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { BehaviorSubject, map, of, tap } from 'rxjs';

@Component({
    selector: 'app-child',
    template: `
        <div>Child: {{test}}-{{test2}}</div>
        <button (click)="listener()">Click</button>
        {{obs$|async}}
        test2 = {{test2}}
    `,
    styles: [`
        :host {
            display: block;
            border: 1px solid red;

            &:hover {
                background-color: blue;
            }
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})  
export class ChildComponent implements OnInit, AfterViewChecked {

    @Input() id!: number;

    @Input() data!: number;

    test2 = 0;


    get test(): string {
        console.log('test', this.id);
        return 'test';
    }

    source = new BehaviorSubject(10);

    obs$ = this.source.pipe(
        tap(() => console.log('obs$', this.id))
    )

    listener() {
        // this.source.next(this.source.value+1)
    }

    constructor(
        private ngZone: NgZone,
        private cd: ChangeDetectorRef
    ) {
        
    }

    ngOnInit() {
        setTimeout(() => {
            console.log('timeout')
            // this.source.next(this.source.value+1)
            this.ngZone.runTask(() => {
                this.test2 = 10;
                // this.cd.detectChanges()
            })
            
        }, 1000)
    }

    ngAfterViewChecked() {
        console.log('view checked')
    }
    
}
