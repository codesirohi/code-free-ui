import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Form } from '../models/Form.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {


  constructor(public http: HttpClient) { }

  getJson(url: string) {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  changePascalCaseToSpace(str) {
    return str.split(/(?=[A-Z])/).join(' ')
  }
}
