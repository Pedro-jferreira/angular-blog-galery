import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/data/dataFake';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  urlPhoto: string = '';
  date: Date | undefined;
  local: string = '';
  description: string = '';
  title: string = '';
  fullDescription: string = '';
  private id: string | null = '0';
  dataFake = dataFake;


  constructor(private activateRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];
    this.urlPhoto = result.urlPhoto;
    this.date = result.date;
    this.local = result.local;
    this.description = result.description;
    this.title = result.title;
    this.fullDescription = result.fullDescription;
  }

  getIndex(): number {
    const currentIndex = this.dataFake.findIndex(
      (article) => article.id === this.id
    );
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % this.dataFake.length;
      return nextIndex;
    } else return 0;
  }
  navigateToHome(): void{

  this.route.navigate(['']);
  }
}
