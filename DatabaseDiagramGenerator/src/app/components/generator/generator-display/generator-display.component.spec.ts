import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorDisplayComponent } from './generator-display.component';

describe('GeneratorDisplayComponent', () => {
  let component: GeneratorDisplayComponent;
  let fixture: ComponentFixture<GeneratorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
