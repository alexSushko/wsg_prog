import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { MessageModel } from '../../Models/message.model';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  @Input() user: string;
  @Output() create = new EventEmitter<MessageModel>();
  data: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  send() {
    var model = <MessageModel>{ data: this.data, user: this.user }
    this.messageService
      .saveMessage(model)
      .subscribe(response => {
        if (response.success) {
          this.data = "";
          this.create.emit(model);
        }
      });
  }

}
