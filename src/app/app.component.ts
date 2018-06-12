import { Component } from '@angular/core';
import { ProductListService } from './shared/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductListService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
