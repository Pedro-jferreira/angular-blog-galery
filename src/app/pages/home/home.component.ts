import { Component } from '@angular/core';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataFake = dataFake



}
