import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { GeneratorInputComponent } from './components/Generator/generator-input/generator-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    GeneratorInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }