import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SendMailsService {
  toParams(data_js) {
    const form_data = [];
    for( const key in data_js ) {
      form_data.push(encodeURIComponent(key) + '=' + encodeURIComponent(data_js[key]));
    }
      console.log(form_data);
    return form_data.join('&');
  }
  sendMessage(data_js) {
    const request = new XMLHttpRequest();
    const params = this.toParams(data_js);
    request.open('POST', 'https://postmail.invotes.com/send', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(params);
  }
}
