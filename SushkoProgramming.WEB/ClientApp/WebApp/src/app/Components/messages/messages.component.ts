import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public user: string = '';
  @ViewChild(MessageListComponent) comp: MessageListComponent;
  constructor() { }

  ngOnInit() {
  }

  newMessage(message) {
    this.comp.messages.push(message);
  }

}
