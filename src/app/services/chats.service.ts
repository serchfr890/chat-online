import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
}
