import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  email: string;
  password: string;
  constructor(private authService: AuthService,
              private router: Router,
              private utilsService: UtilsService) {
  }

  ngOnInit() {
  }

  createAccount() {
    this.authService.register(this.name, this.email, this.password).then(response => {
      this.utilsService.presentToast('Usuario creado exitosamente').then(() => this.router.navigate(['/login']));
    }).catch((error) => {console.log('error en register: ', error)});
  }

}
