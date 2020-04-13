import { Injectable } from '@angular/core';
import {LoadingController, ToastController, } from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    private presentLoading = new Subject<boolean>();
    private skeletonText = new Subject<boolean>();

    constructor(private toastController: ToastController,
                private statusBar: StatusBar,
                private loadingController: LoadingController) {
        this.getPresentLoading().subscribe(async isLoading => {
            if (isLoading) {
                const loading = await loadingController.create({
                    message: 'Espere un momento ... '
                });
                await loading.present();
            } else {
                await this.loadingController.dismiss();
            }
        });
    }

    // Observables Methods
    setPresentLoading(isLoading: boolean): void {
        this.presentLoading.next(isLoading);
    }

    getPresentLoading(): Observable<any> {
        return this.presentLoading.asObservable();
    }

    setPresentSkeletonText(isLoading: boolean): void {
        this.skeletonText.next(isLoading);
    }

    getPresentSkelentonText(): Observable<any> {
        return this.skeletonText.asObservable();
    }

    // End Observable Methods


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


