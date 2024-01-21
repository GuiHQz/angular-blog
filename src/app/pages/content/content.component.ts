import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { dataContent } from '../../data/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  title: string = '';
  photoCover: string = '';
  photoAlt: string = 'Imagem de um jogo de futebol';
  text: string = 'lorem';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataContent.filter((article) => article.id === id)[0];

    this.title = result.title;
    this.photoCover = result.photo;
    this.text = result.textDescription;
  }
}
