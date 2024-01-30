import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-website-v2';
  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }
}
