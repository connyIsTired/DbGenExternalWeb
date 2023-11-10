import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator-display',
  templateUrl: './generator-display.component.html',
  styleUrls: ['./generator-display.component.scss']
})
export class GeneratorDisplayComponent {
  @Input() html!: string;
}
