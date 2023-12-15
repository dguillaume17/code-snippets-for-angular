import { AfterViewChecked, ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Hello World {{getCounter}}</h1>
    `
})
export class AppComponent {

    counter = 0;

    public get getCounter(): number {
        console.log('call')
        return this.counter
    }

    constructor(
        private _ngZone: NgZone,
        private _cd: ChangeDetectorRef
    ) {
        _ngZone.runOutsideAngular(() => {
            setInterval(() => {
                this.counter++

                if (this.counter % 2 === 0) {
                    this._ngZone.run(() => {
                        // console.log('run')
                    })
                    // this._cd.detectChanges();
                }
            }, 1000)
        })
        
    }

    // ngDoCheck() {
    //     console.log('ngDoCheck')
    // }

    // ngAfterViewChecked() {
    //     console.log('ngAfterViewChecked');
    // }


}
