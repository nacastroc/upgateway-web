import { Component } from '@angular/core';
import { Gateway } from './_core/models/gateway';
import { BaseService } from './_core/services/base/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upgateway-web';
  constructor (private service: BaseService<Gateway>) {}
}
