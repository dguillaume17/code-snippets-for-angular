import { ChangeDetectionStrategy, Directive, DoCheck, Injector, Input, NgZone, OnChanges, SimpleChanges } from "@angular/core";

@Directive()
export abstract class BaseComponentDirective implements OnChanges, DoCheck {

    // Abstract properties to override

    public abstract readonly componentDisplayName: string;
    public abstract readonly changeDetectionStrategy: ChangeDetectionStrategy;

    // Public properties to override

    public readonly shouldAppendParentAComponent: boolean = false;
    public readonly shouldAppendParentBComponent: boolean = false;
    public readonly shouldAppendChildA1Component: boolean = false;
    public readonly shouldAppendChildA2Component: boolean = false;
    public readonly shouldAppendChildB1Component: boolean = false;
    public readonly shouldAppendChildB2Component: boolean = false;

    // Service properties

    private _ngZone = this._injector.get(NgZone);

    // Input properties

    @Input()
    public counter = 0;

    // Calculated properties

    public get changeDetectionStrategyToDisplay(): string {
        return this.changeDetectionStrategy === ChangeDetectionStrategy.Default
            ? 'DEFAULT'
            : 'ON PUSH';
    }

    // Lifecycle

    constructor(
        private _injector: Injector
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        this.printLog('ngOnChanges', changes);
    }

    ngDoCheck() {
        this.printLog('ngDoCheck');
    }

    // Event listeners

    public onActionButtonClicked() {
        this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.handleAction();
            }, 2500);
        })
    }

    // Inner work

    private printLog(lifecycle: string, object?: unknown) {
        const message = `${this.componentDisplayName} (${this.changeDetectionStrategyToDisplay}) - ${lifecycle}`

        if (object == null) {
            console.log(message);
        } else {
            console.log(message, object);
        } 
    }

    private handleAction() {
        this.counter++;
    }

} 