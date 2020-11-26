import {Component, Input, OnInit} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';
import {FormGroup} from '@angular/forms';
import {Select} from '../../../models/select';
import {StepRecipeService} from '../service/step-recipe.service';

@Component({
  selector: 'app-step-recipe',
  templateUrl: './step-recipe.component.html',
  styleUrls: ['./step-recipe.component.css']
})
export class StepRecipeComponent implements OnInit {
  valueSelect = GlobalConstants.getCategoryRecipe;
  urlApi = GlobalConstants.apiUrl;
  imageDefault: Select = GlobalConstants.imageDefault;
  imageFile: File;

  @Input() formRecipeGroup: FormGroup;
  @Input() name: string;
  @Input() category: string;
  @Input() image: string;

  constructor(public stepRecipeService: StepRecipeService) {
  }

  ngOnInit() {
  }

  changeFile() {
    this.removeFile();
    this.onClick();
  }

  onClick() {
    const fileUpload = document.getElementById("fileUpload") as HTMLInputElement;
    fileUpload.onchange = () => {
      this.stepRecipeService.uploadFile(fileUpload.files[0]).subscribe(
        name => {
          this.formRecipeGroup.get(this.image).setValue(name);
          const file = fileUpload.files[0];
          this.imageFile = new File([file], name, {type: file.type});
          $('.fileinput-new').hide();
          $('.fileinput-exists').show();
        },
        error => {
          console.log(error);
        });
    };
    fileUpload.click();
  }

  removeFile() {
    this.stepRecipeService.removeFile(this.imageFile).subscribe(
      name => {
        $('.fileinput-exists').hide();
        $('.fileinput-new').show();
        this.imageFile = null;
        this.formRecipeGroup.get(this.image).setValue('');
        },
      error => {
        console.log(error);
      }
    );
  }
}

