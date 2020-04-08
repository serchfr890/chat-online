import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router,
              private angularFirestore: AngularFirestore) { }

  login(email: string, password: string) {
      return new Promise(((resolve, reject) => {
          this.angularFireAuth.signInWithEmailAndPassword(email, password).then(responseLoginFirebase => resolve(responseLoginFirebase))
              .catch(throwable => reject(throwable));
      }));
  }

  logout() {
      this.angularFireAuth.signOut().then(r => this.router.navigate(['/login']));
  }

  register(name: string, email: string, password: string) {
    return new Promise(((resolve, reject) => {
        this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(response => {
            resolve(response);
            const uid: string = response.user.uid;
            this.angularFirestore.collection('user').doc(response.user.uid).set({
                name,
                uid
            });
        }).catch(error => reject(error));
    }));
  }
}
