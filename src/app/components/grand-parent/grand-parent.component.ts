import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponentDirective } from '../base/base-component.directive';

const changeDetectionStrategy = ChangeDetectionStrategy.Default;

@Component({
    selector: 'app-grand-parent',
    templateUrl: '../base/base-component.template.html',
    styleUrls: ['../base/base-component.style.scss']
})
export class GrandParentComponent extends BaseComponentDirective {

    // Overridden properties

    public override componentDisplayName = 'GRAND-PARENT';
    public override changeDetectionStrategy = changeDetectionStrategy;

    public override shouldAppendParentAComponent = true;
    public override shouldAppendParentBComponent = true;
}
