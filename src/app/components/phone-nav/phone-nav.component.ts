import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-phone-nav',
  templateUrl: './phone-nav.component.html',
  styleUrls: ['./phone-nav.component.css']
})

export class PhoneNavComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [{
      items: [
        {label: 'Головна', url: ' '},
        {label: 'Про нас', url: '#aboutUsBlock '},
        {label: 'Галерея', url: 'gallery '},
        {label: 'Контакти', url: '#contactsBlock '}
      ]
    }];
  }
}


