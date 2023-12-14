import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Hello World {{test}}</h1>
        <app-child [id]="1" [data]="data"></app-child>
        <app-child [id]="2"></app-child>
        <button (click)="listener()">Click</button>
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {

    get test(): string {
        console.log('root');
        return 'test';
    }

    data = 0;


    listener() {
        this.data += 1;
    }
}
