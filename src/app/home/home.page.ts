import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ChatsService} from '../services/chats.service';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {ChatComponent} from '../components/chat/chat.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  chatsRooms: Chat[] = [];
  constructor(private authService: AuthService,
              private chatsService: ChatsService,
              private modalController: ModalController,
              private actionSheetController: ActionSheetController) {}

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
        chat
      }
    }).then(modal => modal.present());
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.onLogout();
        }
      },
        {
          text: 'DarkMode',
          icon: 'moon',
          handler: () => {
            document.body.classList.toggle('dark');
          }
        }]
    });
    await actionSheet.present();
  }


}
