import { Component, OnInit } from '@angular/core';
import * as sentry from '@sentry/angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-relic-POC';

  ngOnInit() {
    // sentry.init(
    //   {
    //     dsn:'https://c30e3c6be8bd40b4bda718a10d5b338a@o4504005807112192.ingest.sentry.io/4504005808750592',
    //     release: 'v1.0',
    //     environment: ''
    //   }
    // )
  }
}
