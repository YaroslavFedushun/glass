import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validator, Validators} from '@angular/forms';
import {any} from 'codelyzer/util/function';
import {InputTextModule} from 'primeng/inputtext';
import {SendMailsService} from '../send-mails-service/send-mails.service';

@Component({
  selector: 'app-send-mails',
  templateUrl: './send-mails.component.html',
  styleUrls: ['./send-mails.component.css'],
  providers: [SendMailsService],
})

export class SendMailsComponent implements OnInit {
  constructor(private mailsService: SendMailsService) {
  }
  messageForm: FormGroup;
  isDisable: boolean;
  ngOnInit() {
    this.messageForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(),
      number: new FormControl(),
      message: new FormControl()
    });
    this.isDisable = true;
  }
  getEmailData() {
    return {
      'access_token': 'nq7yh77ep4mve3gkmrl1pvuj',
      'subject': this.messageForm.controls.name.value,
      'text': this.messageForm.controls.email.value + ' \n' +
        this.messageForm.controls.number.value + ' \n' +
        this.messageForm.controls.message.value
    };
  }
  sendEmail() {
  this.mailsService.sendMessage(this.getEmailData());
}
}
