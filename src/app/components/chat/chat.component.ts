import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  name: string;
  constructor(private navParams: NavParams,
              private modalController: ModalController) { }

  ngOnInit() {
    this.name = this.navParams.get('name');
  }

  closeChat(): void {
    this.modalController.dismiss();
  }

}
