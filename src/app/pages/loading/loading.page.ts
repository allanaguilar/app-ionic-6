import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;
  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading('Hola Mundo');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading( message: string) {
    this.loading = await this.loadingCtrl.create({
      // cssClass: 'my-custom-class',
      // message: message,
      message, // Asi es mejor, esto lo permite ecma script, cuando el nombre de la variable es el mismo que la propiedad
      // duration: 2000
    });
    await this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

}
