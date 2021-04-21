import { Component } from '@angular/core';
import { Services } from './../services/service';
import { Route } from '@angular/compiler/src/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private service: Services,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  async onSubmit() {
    const loading = await this.loadingCtrl.create({ message: 'Logging in ...' });
    await loading.present();

    this.service.login(this.form.value).subscribe(
      async token => {
        localStorage.setItem('token', token);
        loading.dismiss();
        this.router.navigateByUrl('/attendancelog');
      },
      async () => {
        const alert = await this.alertCtrl.create({ message: 'Login Failed', buttons: ['OK'] });
        await alert.present();
        loading.dismiss();
      }
    );
  }

}
