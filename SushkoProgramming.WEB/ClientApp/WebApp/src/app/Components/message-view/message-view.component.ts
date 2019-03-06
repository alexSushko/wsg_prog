import { Component, OnInit, Input } from '@angular/core';
import { MessageModel } from '../../Models/message.model';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {
  @Input() message: MessageModel;
  constructor() { }

  ngOnInit() {
  }

}
