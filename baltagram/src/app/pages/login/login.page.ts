import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {

  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: "Autenticando..." });
    loading.present();

    this
      .fbAuth
      .auth.signInWithEmailAndPassword(
        this.form.controls['email'].value,
        this.form.controls['password'].value)
      .then((data) => {
        loading.dismiss();
        localStorage.setItem('baltagram.user', JSON.stringify(new User('', data.user.email, '')));
        this.navCtrl.navigateRoot('home');
      })
      .catch((err) => {
        console.log(err);
        loading.dismiss();
        this.showMessage("Usuário ou senha inválidos");
      });
  }

  async showMessage(message: string) {
    const toast = await this.toastCtrl.create({ message: message, duration: 3000, showCloseButton: true, closeButtonText: "OK" });
    toast.present;
  }

  async goToSignup() {
    this.navCtrl.navigateForward('signup');
  }
}