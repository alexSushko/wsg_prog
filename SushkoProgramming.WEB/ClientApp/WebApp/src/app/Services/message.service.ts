import { Injectable } from '@angular/core';
import { MessageModel } from '../Models/message.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }

  saveMessage(message: MessageModel) {
    return this.http.post<any>('api/Message/Save', message);
  }

  getNewMessages(user: string) {
    return this.http.get<MessageModel[]>('api/Message/GetNew?user=' + user);
  }
}
