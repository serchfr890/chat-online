import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(private toastController: ToastController,
                private statusBar: StatusBar) {
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        await toast.present();
    }

    changeStatusbarColor(hexString: string): void {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString(hexString);
    }

    checkDarkMode() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
        }
    }
}

