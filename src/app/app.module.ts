import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SnakeCasePipe } from './pipe/snake-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SnakeCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
