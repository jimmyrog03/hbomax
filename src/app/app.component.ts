import { Component } from '@angular/core';
import { mock_media_list } from './lists/mock.media.list';
import { MediaListModel } from './lists/media.list.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'hbomax';
 
}
