import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Messages} from '../models/messages';
import {firestore} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private angularFireStore: AngularFirestore) { }

  getChatRooms(): Observable<any> {
    return this.angularFireStore.collection('ChatRooms').snapshotChanges().pipe(map( chats => {
      return chats.map(a => {
        const data = a.payload.doc.data() as Chat;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getChatRoom(chatId: string): Observable<any> {
    return this.angularFireStore.collection('ChatRooms').doc(chatId).valueChanges();
  }

  sendMsgToFirebase(message: Messages, chatId: string): void {
    this.angularFireStore.collection('ChatRooms').doc(chatId).update({
      messages: firestore.FieldValue.arrayUnion(message)
    });
  }
}
