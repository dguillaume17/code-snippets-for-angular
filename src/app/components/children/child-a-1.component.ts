import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponentDirective } from '../base/base-component.directive';

const changeDetectionStrategy = ChangeDetectionStrategy.Default;

@Component({
    selector: 'app-child-a-1',
    templateUrl: '../base/base-component.template.html',
    styleUrls: ['../base/base-component.style.scss']
})
export class ChildA1Component extends BaseComponentDirective {

    // Overridden properties

    public override componentDisplayName = 'CHILD-A-1';
    public override changeDetectionStrategy = changeDetectionStrategy;

}

