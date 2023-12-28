import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponentDirective } from '../base/base-component.directive';

const changeDetectionStrategy = ChangeDetectionStrategy.Default;

@Component({
    selector: 'app-parent-a',
    templateUrl: '../base/base-component.template.html',
    styleUrls: ['../base/base-component.style.scss']
})
export class ParentAComponent extends BaseComponentDirective {

    // Overridden properties

    public override componentDisplayName = 'PARENT-A';
    public override changeDetectionStrategy = changeDetectionStrategy;

    public override shouldAppendChildA1Component = true;
    public override shouldAppendChildA2Component = true;
}

