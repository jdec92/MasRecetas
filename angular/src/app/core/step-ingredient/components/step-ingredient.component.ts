import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Select} from '../../../models/select';
import {GlobalConstants} from '../../../common/global-constants';
import {MatTable} from '@angular/material/table';
import {Ingredient} from '../../../models/ingredient';


@Component({
  selector: 'app-step-ingredient',
  templateUrl: './step-ingredient.component.html',
  styleUrls: ['./step-ingredient.component.css']
})


export class StepIngredientComponent implements OnInit {
  dataSource = this.getTableIngredient();
  displayedColumns: string[] = ['title', 'measure', 'amount', 'action'];
  valueSelect: Select[] = GlobalConstants.getMeasureIngredient;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  @Input() formIngredientGroup: FormGroup;
  @Input() controlValidator: string;


  constructor() {
  }

  ngOnInit() {
  }

  addIngredientFile() {
    this.dataSource.push(this.newIngredientRow(this.dataSource.length));
    this.table.renderRows();
  }

  removeIngredientFile(row_obj: Ingredient) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return key !== row_obj.id;
    });
  }

  updateIngredient(event, row_obj: Ingredient) {
    if (event.hasOwnProperty('source')) {
      row_obj.measure = Number(event.value);
    } else if (event.target.id === 'title') {
      row_obj.title = event.target.value;
    } else if (event.target.id === 'amount') {
      row_obj.amount = parseFloat(event.target.value);
    }
    this.dataSource[row_obj.id] = row_obj;
  }

  validateIngredients() {
    let isComplete = true;
    this.dataSource.forEach((value, key) => {
      if (value.title === '') {
        isComplete = false;
      }
    });
    if (isComplete) {
      this.formIngredientGroup.get(this.controlValidator).setValue(JSON.stringify(this.dataSource));
    } else {
      this.formIngredientGroup.get(this.controlValidator).setValue('');
    }
  }

  getTableIngredient(): Ingredient[] {
    return [this.newIngredientRow(0)];
  }

  newIngredientRow(id: number): Ingredient {
    return {id: id, title: '', measure: 0, amount: 0};
  }


}
