import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { Observable } from 'rxjs/Observable';
import { MessageModel } from '../../Models/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input() user: string;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messages: MessageModel[] = [];
  constructor(private messageService: MessageService) { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  ngOnInit() {

    this.scrollToBottom();
    setInterval(() => {
      if (this.user) {
        this.messageService.getNewMessages(this.user).subscribe(t => {
          this.messages = [...this.messages, ...t];
        })
      }
    }
      , 1000);
  }

}
