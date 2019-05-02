import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass-showers',
  templateUrl: './glass-showers.component.html',
  styleUrls: ['./glass-showers.component.css']
})
export class GlassShowersComponent implements OnInit {
   products = {title: 'Скляні душові',
       images: [
          {src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_278135804-11-1-884x1024.jpg '},
          {src : 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_717210982-1.jpg'},
          {src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_281855216-11.jpg'}
          ]
   };
  constructor() { }

  ngOnInit() {

  }

}
