import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step-ingredient',
  templateUrl: './step-ingredient.component.html',
  styleUrls: ['./step-ingredient.component.css']
})
export class StepIngredientComponent implements OnInit {
  @Input() formIngredientGroup: FormGroup;
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }
}
