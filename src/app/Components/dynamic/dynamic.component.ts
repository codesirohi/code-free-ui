import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from 'src/app/models/Form.model';
import { DynamicService } from 'src/app/shared/dynamic.service';

@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {



  formData: Form;
  url = 'http://localhost:8080/templates/projectplus/clients/addedit';

  //Index URL:  http://localhost:8080/templates/projectplus/businessUnits/index


  constructor(
    public http: HttpClient,
    public utilityService: DynamicService) { }

  ngOnInit(): void {
    this.getJsonDetails();
  }

  getJsonDetails(){
    // to get the Json file from the api

    this.utilityService.getJson(this.url).subscribe(res => {
        this.formData = res;
        //console.info(this.formData)
        //Checking 
        if(this.formData.Sections !== undefined){
          console.log('this.formData.Sections is defined !!!!')
        }
        
      })
  }

  getProperLableName(lable: string) {
    return this.utilityService.changePascalCaseToSpace(lable);
  }

  getIdForRefresh(inputControlName:string){
    return "refresh_" + inputControlName;
  }

}
