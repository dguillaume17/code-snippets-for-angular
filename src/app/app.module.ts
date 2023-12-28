import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildA1Component } from './components/children/child-a-1.component';
import { ChildA2Component } from './components/children/child-a-2.component';
import { GrandParentComponent } from './components/grand-parent/grand-parent.component';
import { ParentAComponent } from './components/parents/parent-a.component';
import { ParentBComponent } from './components/parents/parent-b.component';
import { ChildB1Component } from './components/children/child-b-1.component';
import { ChildB2Component } from './components/children/child-b-2.component';

@NgModule({
    declarations: [
        AppComponent,
        GrandParentComponent,
        ParentAComponent,
        ParentBComponent,
        ChildA1Component,
        ChildA2Component,
        ChildB1Component,
        ChildB2Component
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
