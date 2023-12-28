import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponentDirective } from '../base/base-component.directive';

const changeDetectionStrategy = ChangeDetectionStrategy.Default;

@Component({
    selector: 'app-child-b-1',
    templateUrl: '../base/base-component.template.html',
    styleUrls: ['../base/base-component.style.scss']
})
export class ChildB1Component extends BaseComponentDirective {

    // Overridden properties

    public override componentDisplayName = 'CHILD-B-1';
    public override changeDetectionStrategy = changeDetectionStrategy;
}

