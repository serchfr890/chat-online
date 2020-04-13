import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ChatsService} from '../services/chats.service';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {ChatComponent} from '../components/chat/chat.component';
import {Router} from '@angular/router';
import {UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  chatsRooms: Chat[] = [];
  data = false;
  constructor(private authService: AuthService,
              private chatsService: ChatsService,
              private modalController: ModalController,
              private actionSheetController: ActionSheetController,
              private router: Router,
              private utilsService: UtilsService) {
    this.utilsService.getPresentSkelentonText().subscribe(isLoading => this.data = isLoading);
  }

  onLogout(): void {
    this.utilsService.setPresentLoading(false);
    this.authService.logout().then(() => {
      this.utilsService.setPresentLoading(false);
      this.router.navigate(['/login']).then(() => {});
    }).catch(() => this.utilsService.setPresentLoading(false));
  }

  ngOnInit(): void {
    this.utilsService.setPresentSkeletonText(true);
    this.chatsService.getChatRooms().subscribe(chats => {
        this.chatsRooms = chats;
        this.utilsService.setPresentSkeletonText(false);
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
