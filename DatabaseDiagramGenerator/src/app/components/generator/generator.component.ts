import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  entryChange!: string;

  onEntryChange(e:string){
    this.entryChange = e;
  }
}
