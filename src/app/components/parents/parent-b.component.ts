import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponentDirective } from '../base/base-component.directive';

const changeDetectionStrategy = ChangeDetectionStrategy.OnPush;

@Component({
    selector: 'app-parent-b',
    templateUrl: '../base/base-component.template.html',
    styleUrls: ['../base/base-component.style.scss']
})
export class ParentBComponent extends BaseComponentDirective {

    // Overridden properties

    public override componentDisplayName = 'PARENT-B';
    public override changeDetectionStrategy = changeDetectionStrategy;

    public override shouldAppendChildB1Component = true;
    public override shouldAppendChildB2Component = true;
}

