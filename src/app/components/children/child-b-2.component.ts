import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponentDirective } from '../base/base-component.directive';

const changeDetectionStrategy = ChangeDetectionStrategy.OnPush;

@Component({
    selector: 'app-child-b-2',
    templateUrl: '../base/base-component.template.html',
    styleUrls: ['../base/base-component.style.scss']
})
export class ChildB2Component extends BaseComponentDirective {

    // Overridden properties

    public override componentDisplayName = 'CHILD-B-2';
    public override changeDetectionStrategy = changeDetectionStrategy;
}

