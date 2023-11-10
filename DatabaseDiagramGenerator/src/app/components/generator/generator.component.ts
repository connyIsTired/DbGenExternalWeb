import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  entryChange!: string;
  constructor(private sanitize: DomSanitizer){}

  onEntryChange(e:string){
    this.entryChange = e;
  }
}
