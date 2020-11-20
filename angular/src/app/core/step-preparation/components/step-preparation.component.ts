import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step-preparation',
  templateUrl: './step-preparation.component.html',
  styleUrls: ['./step-preparation.component.css']
})
export class StepPreparationComponent implements OnInit {
  @Input() formPreparationGroup: FormGroup;
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }
}
