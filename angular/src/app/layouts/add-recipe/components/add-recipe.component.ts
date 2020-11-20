import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Select} from '../../../models/select';
import {AddRecipeService} from '../service/add-recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddRecipeComponent implements OnInit {
  routeInfoAddRecipe = GlobalConstants.routeInfoAddRecipe;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  valueSelect = GlobalConstants.getCategoryRecipe;
  imageDefault: Select = GlobalConstants.imageDefault;
  imageFile: File;

  constructor(public addRecipeService: AddRecipeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      categoryCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  changeFile() {
    this.removeFile();
    this.onClick();
  }

  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      this.addRecipeService.uploadFile(fileUpload.files[0]).subscribe(
        name => {
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
    this.addRecipeService.removeFile(this.imageFile).subscribe(
      name => {
        $('.fileinput-exists').hide();
        $('.fileinput-new').show();
        this.imageFile = null;
      },
      error => {
        console.log(error);
      }
    );
  }
}

