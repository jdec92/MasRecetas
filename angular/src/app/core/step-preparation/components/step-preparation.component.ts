import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {configAngularEditor} from '../../angular-editor/config-editor';

@Component({
  selector: 'app-step-preparation',
  templateUrl: './step-preparation.component.html',
  styleUrls: ['./step-preparation.component.css'],
})
export class StepPreparationComponent implements OnInit {
  @Input() formPreparationGroup: FormGroup;
  @Input() name: string;

  @Output() eventCallLayout = new EventEmitter();

  configEditor = configAngularEditor;

  constructor() {
  }

  ngOnInit() {
  }

  validateFormsSteps() {
    this.eventCallLayout.emit();
  }

}
