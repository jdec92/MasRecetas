import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../../common/global-constants';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class AddRecipeService {
  constructor(private request: HttpClient) {
  }

  uploadFile(file: File): Observable<string> {
    const fd = new FormData();
    fd.append('image', file);
    return this.request.post<string>(GlobalConstants.apiUrl + GlobalConstants.uploadFile, fd);
  }
}
