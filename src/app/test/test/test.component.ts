import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private apiService:ErrorHandlerService) { }

  ngOnInit(): void {
  }
  
  throwError() {
    throw(new Error('Hey Error Occured'));
  }

  callGoogle() {
    this.apiService.callApi().subscribe((data:any) => {
      console.error('Data Received is ->', data);
    }, (_err:any) => {
      console.error("Error really received is -> ", _err);
      let a = _err.testProp.test;
    })
  }

}
