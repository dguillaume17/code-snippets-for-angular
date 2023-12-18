import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1 } from './component-1/component-1.component';

@NgModule({
    declarations: [
        AppComponent,
        Component1
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
