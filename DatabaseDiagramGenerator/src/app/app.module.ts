import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneratorInputComponent } from './components/generator/generator-input/generator-input.component';
import { GeneratorDisplayComponent, SafeHtmlPipe } from './components/generator/generator-display/generator-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    GeneratorInputComponent,
    GeneratorDisplayComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
