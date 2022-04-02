import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libs-externas';

  // uso do lodash
  list = _.map([1, 2, 3], (n) => `# ${n}`);
}
