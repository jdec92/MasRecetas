import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Select} from '../../../models/select';
import {HttpClient} from '@angular/common/http';

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


  constructor(private formBuilder: FormBuilder, private request: HttpClient) {
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
      const file = fileUpload.files[0];
      this.uploadFile(file);
    };
    fileUpload.click();
  }

  cancelFile(file: any) {
    file.sub.unsubscribe();
  }

  retryFile(file: any) {
    this.uploadFile(file);
    file.canRetry = false;
  }

  private uploadFile(file: any) {
    const fd = new FormData();
    fd.append('image', file);

    this.request.post(GlobalConstants.apiUrl + '/upload/file', fd, {
      headers: { 'X-Requested-With' : 'XMLHttpRequest'}
    }).subscribe(
      (event: any) => {
        console.log(event);
      }
    );
  }
}

