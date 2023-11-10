import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generator-input',
  templateUrl: './generator-input.component.html',
  styleUrls: ['./generator-input.component.scss']
})
export class GeneratorInputComponent {
  entry = new FormControl('');
}
