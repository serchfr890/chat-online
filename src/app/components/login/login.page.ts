import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../services/utils.service';
import {TOAST_MESSAGES} from '../../../environments/environment';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string;
    password: string;

    constructor(private authService: AuthService,
                private router: Router,
                private utilsService: UtilsService) {
    }

    ngOnInit() {
    }

    onSubmitLogin() {
        this.utilsService.setPresentLoading(true);
        this.authService.login(this.email, this.password).then(res => {
            this.router.navigate(['/home']).then(() => {
                this.utilsService.presentToast(TOAST_MESSAGES.SUCCESS_LOGIN);
                this.utilsService.setPresentLoading(false);
            });
        }).catch(() => {
            this.utilsService.presentToast(TOAST_MESSAGES.ERROR_LOGIN);
            this.utilsService.setPresentLoading(false);
        });
    }
}
