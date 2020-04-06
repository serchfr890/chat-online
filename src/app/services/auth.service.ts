import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router) { }

  login(email: string, password: string) {
      return new Promise(((resolve, reject) => {
          this.angularFireAuth.signInWithEmailAndPassword(email, password).then(responseLoginFirebase => resolve(responseLoginFirebase))
              .catch(throwable => reject(throwable));
      }));
  }

  logout() {
      this.angularFireAuth.signOut().then(r => this.router.navigate(['/login']));
  }
}
