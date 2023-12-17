import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppChildComponent, AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        AppChildComponent
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
