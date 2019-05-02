import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass-stairs',
  templateUrl: './glass-stairs.component.html',
  styleUrls: ['./glass-stairs.component.css']
})
export class GlassStairsComponent implements OnInit {
  products = {title: 'Скляні сходи та поручні',
    images: [
      {src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_39153091-683x1024.jpg'},
      {src : 'http://new-glass.com.ua/wp-content/uploads/2018/10/noname3-679x1024.jpg'},
      {src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/noname6.jpg'}
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
