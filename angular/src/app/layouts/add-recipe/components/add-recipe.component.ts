import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Select} from '../../../models/select';
import {HttpClient} from '@angular/common/http';
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
  uploadImage: Select = {value: 'Receta sin imagen', viewValue: './assets/img/default.jpg'};


  constructor(
    public addRecipeService: AddRecipeService,
    private formBuilder: FormBuilder,
    private request: HttpClient) {
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

  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      $('.fileinput-new').hide();
      $('.fileinput-exists').show();
      this.addRecipeService.uploadFile(fileUpload.files[0]).subscribe(
      name => {

      },
      error => {
          console.log(error);
      });
    };
    fileUpload.click();
  }

  removeFile() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    this.request.post(GlobalConstants.apiUrl + '/remove/file', fileUpload.files[0].name).subscribe(
      (event: any) => {
        console.log(event);
      }
    );
  }
}

