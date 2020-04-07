import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Messages} from '../../models/messages';
import {ChatsService} from '../../services/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chat: Chat;
  msg: string;
  // messages: Messages[] = [];
  message: Messages;
  room: any;
  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private chatsService: ChatsService) { }

  ngOnInit() {
    this.chat = this.navParams.get('chat');
    this.chatsService.getChatRoom(this.chat.id).subscribe(room => {this.room = room; console.log('ROMMS: ', room)});
  }

  closeChat(): void {
    this.modalController.dismiss();
  }

  sendMessage() {
    const message: Messages = {
      content: this.msg,
      type: 'text',
      date: new Date()
    }
    this.chatsService.sendMsgToFirebase(message, this.chat.id);
    this.msg = '';
  }

}
