import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  standalone: true,
  imports: [MatGridListModule],
})
export class AboutMeComponent {}
