import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(email: string, password: string) {
      return new Promise(((resolve, reject) => {
          this.angularFireAuth.signInWithEmailAndPassword(email, password).then(responseLoginFirebase => resolve(responseLoginFirebase))
              .catch(throwable => reject(throwable));
      }));
  }
}
