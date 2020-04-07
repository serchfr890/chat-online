import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ChatsService} from '../services/chats.service';
import {ModalController} from '@ionic/angular';
import {ChatComponent} from '../components/chat/chat.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  chatsRooms: Chat[] = [];
  constructor(private authService: AuthService,
              private chatsService: ChatsService,
              private modalController: ModalController) {}

  onLogout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.chatsService.getChatRooms().subscribe(chats => {
      this.chatsRooms = chats;
    });
  }

  openChat(chat: Chat): void {
    this.modalController.create({
      component: ChatComponent,
      componentProps: {
        name: chat.name
      }
    }).then(modal => modal.present());
  }


}
