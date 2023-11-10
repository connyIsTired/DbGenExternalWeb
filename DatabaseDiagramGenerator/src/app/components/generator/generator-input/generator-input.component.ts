import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generator-input',
  templateUrl: './generator-input.component.html',
  styleUrls: ['./generator-input.component.scss']
})
export class GeneratorInputComponent implements OnInit {
  @Output() entryChange = new EventEmitter<string>();
  entry = new FormControl('',{updateOn: 'change'});

  ngOnInit(): void {
    this.entry.valueChanges.subscribe((value) => {
      this.entryChange.emit(value);
    });
  }
}
