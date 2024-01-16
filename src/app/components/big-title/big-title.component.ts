import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-title',
  templateUrl: './big-title.component.html',
  styleUrls: ['./big-title.component.css'],
})
export class BigTitleComponent {
  @Input()
  title: string = '' || 'all posts';
}
