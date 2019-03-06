import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { NewMessageComponent } from './Components/new-message/new-message.component';
import { MessageListComponent } from './Components/message-list/message-list.component';
import { MessageViewComponent } from './Components/message-view/message-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './Services/message.service';

import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    MessageListComponent,
    MessageViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
